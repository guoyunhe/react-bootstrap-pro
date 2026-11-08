import { useCallback, useEffect, useRef, useState, type RefObject } from 'react';

import type { CarouselEffect, CarouselEnds } from './carousel';

type Options = {
  autoplay?: boolean | undefined;
  center?: boolean | undefined;
  auto?: boolean | undefined;
  items?: number | undefined;
  itemsPeek?: string | number | undefined;
  effect: CarouselEffect;
  ends: CarouselEnds;
};

function getElements(root: HTMLElement) {
  const viewport = Array.from(root.querySelectorAll<HTMLElement>('.carousel-inner')).find(
    (element) => element.closest('.carousel') === root,
  );
  const items = viewport
    ? Array.from(viewport.querySelectorAll<HTMLElement>('.carousel-item')).filter(
        (element) =>
          element.closest('.carousel') === root &&
          !element.classList.contains('carousel-item-clone'),
      )
    : [];
  return { viewport, items };
}

function delta(viewport: HTMLElement, item: HTMLElement, center: boolean) {
  const outer = viewport.getBoundingClientRect();
  const inner = item.getBoundingClientRect();
  if (center) return inner.left + inner.width / 2 - (outer.left + outer.width / 2);
  const padding = Number.parseFloat(getComputedStyle(viewport).scrollPaddingInlineStart) || 0;
  return getComputedStyle(viewport).direction === 'rtl'
    ? inner.right - outer.right + padding
    : inner.left - outer.left - padding;
}

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useCarousel(rootRef: RefObject<unknown>, options: Options) {
  const {
    autoplay = false,
    center = false,
    auto,
    items: perView = 1,
    itemsPeek,
    effect,
    ends,
  } = options;
  const [index, setIndex] = useState<number | null>(null);
  const [slides, setSlides] = useState<HTMLElement[]>([]);
  const count = slides.length;
  const [lastIndex, setLastIndex] = useState(0);
  const [playing, setPlaying] = useState(autoplay);
  const [previousAutoplay, setPreviousAutoplay] = useState(autoplay);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const [viewportVersion, setViewportVersion] = useState(0);
  const initialized = useRef(false);
  const ignoreScroll = useRef(false);
  const scrollTimer = useRef<number | undefined>(undefined);
  const cancelLoop = useRef<(() => void) | undefined>(undefined);

  if (previousAutoplay !== autoplay) {
    setPreviousAutoplay(autoplay);
    setPlaying(autoplay);
  }

  const navigate = useCallback(
    (requested: number, user = false) => {
      const root = rootRef.current;
      if (!(root instanceof HTMLElement)) return;
      const { viewport, items } = getElements(root);
      if (!viewport || !items.length) return;
      if (user) setPlaying(false);
      cancelLoop.current?.();
      const endIndex = effect === 'fade' ? items.length - 1 : Math.min(lastIndex, items.length - 1);
      const length = endIndex + 1;
      const next =
        ends === 'stop'
          ? Math.max(0, Math.min(requested, endIndex))
          : ((requested % length) + length) % length;
      const item = items[next];
      if (!item) return;
      setIndex(next);
      if (effect === 'fade') return;
      ignoreScroll.current = true;
      window.clearTimeout(scrollTimer.current);
      const crossesEnd = requested < 0 || requested >= length;
      if (
        ends === 'loop' &&
        crossesEnd &&
        !auto &&
        !center &&
        perView === 1 &&
        !itemsPeek &&
        items.length > 1 &&
        !reducedMotion()
      ) {
        const clone = item.cloneNode(true);
        if (!(clone instanceof HTMLElement)) return;
        clone.classList.add('carousel-item-clone');
        clone.classList.remove('active');
        clone.removeAttribute('id');
        clone.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'));
        clone.setAttribute('aria-hidden', 'true');
        clone.inert = true;
        const snap = viewport.style.scrollSnapType;
        viewport.style.scrollSnapType = 'none';
        const anchor = requested < 0 ? items[0] : items[items.length - 1];
        const before = anchor?.getBoundingClientRect().left ?? 0;
        if (requested < 0) viewport.prepend(clone);
        else viewport.append(clone);
        if (anchor)
          viewport.scrollTo({
            left: viewport.scrollLeft + anchor.getBoundingClientRect().left - before,
            behavior: 'instant',
          });
        const start = viewport.scrollLeft;
        const distance = delta(viewport, clone, center);
        let frame = 0;
        let started: number | undefined;
        const finish = () => {
          window.cancelAnimationFrame(frame);
          clone.remove();
          viewport.scrollTo({
            left: viewport.scrollLeft + delta(viewport, item, center),
            behavior: 'instant',
          });
          viewport.style.scrollSnapType = snap;
          cancelLoop.current = undefined;
          ignoreScroll.current = false;
        };
        cancelLoop.current = finish;
        const animate = (time: number) => {
          started ??= time;
          const progress = Math.min((time - started) / 300, 1);
          viewport.scrollTo({
            left: start + distance * (0.5 - Math.cos(progress * Math.PI) / 2),
            behavior: 'instant',
          });
          if (progress < 1) frame = window.requestAnimationFrame(animate);
          else finish();
        };
        frame = window.requestAnimationFrame(animate);
        return;
      }
      viewport.scrollTo({
        left: viewport.scrollLeft + delta(viewport, item, center),
        behavior: reducedMotion() ? 'instant' : 'smooth',
      });
      scrollTimer.current = window.setTimeout(
        () => {
          ignoreScroll.current = false;
        },
        reducedMotion() ? 0 : 500,
      );
    },
    [rootRef, center, auto, perView, itemsPeek, effect, ends, lastIndex],
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!(root instanceof HTMLElement)) return;
    const { viewport } = getElements(root);
    if (!viewport) {
      const observer = new MutationObserver(() => {
        if (getElements(root).viewport) setViewportVersion((value) => value + 1);
      });
      observer.observe(root, { childList: true, subtree: true });
      return () => observer.disconnect();
    }
    const refresh = () => {
      if (cancelLoop.current) return;
      const { items } = getElements(root);
      setSlides((previous) =>
        items.length === previous.length &&
        items.every((item, itemIndex) => item === previous[itemIndex])
          ? previous
          : items,
      );
      if (effect === 'fade' || viewport.clientWidth === 0)
        setLastIndex(Math.max(0, items.length - 1));
      else {
        const max = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
        const end = getComputedStyle(viewport).direction === 'rtl' ? -max : max;
        let nearest = 0;
        let distance = Number.POSITIVE_INFINITY;
        items.forEach((item, itemIndex) => {
          const candidate = Math.abs(viewport.scrollLeft + delta(viewport, item, center) - end);
          if (candidate < distance) {
            distance = candidate;
            nearest = itemIndex;
          }
        });
        setLastIndex(nearest);
      }
      if (!initialized.current && items.length) {
        initialized.current = true;
        const selected = Math.max(
          0,
          items.findIndex((item) => item.classList.contains('active')),
        );
        setIndex(selected);
        const item = items[selected];
        if (item && effect !== 'fade') {
          viewport.scrollTo({
            left: viewport.scrollLeft + delta(viewport, item, center),
            behavior: 'instant',
          });
        }
      } else {
        setIndex((current) =>
          current === null
            ? items.length
              ? 0
              : null
            : Math.min(current, Math.max(items.length - 1, 0)),
        );
      }
    };
    const onScroll = () => {
      if (ignoreScroll.current || effect === 'fade') return;
      const { items } = getElements(root);
      let nearest = 0;
      let distance = Number.POSITIVE_INFINITY;
      items.forEach((item, itemIndex) => {
        const candidate = Math.abs(delta(viewport, item, center));
        if (candidate < distance) {
          distance = candidate;
          nearest = itemIndex;
        }
      });
      if (items.length) setIndex(nearest);
    };
    const onPointer = () => {
      setPlaying(false);
      window.clearTimeout(scrollTimer.current);
      cancelLoop.current?.();
      ignoreScroll.current = false;
    };
    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);
    const onVisibility = () => setVisible(document.visibilityState === 'visible');
    const observer = new MutationObserver(() => {
      if (getElements(root).viewport !== viewport) {
        setViewportVersion((value) => value + 1);
      } else {
        refresh();
      }
    });
    const resizeObserver =
      typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(refresh);
    observer.observe(root, { childList: true, subtree: true });
    resizeObserver?.observe(viewport);
    viewport.addEventListener('scroll', onScroll, { passive: true });
    viewport.addEventListener('pointerdown', onPointer);
    viewport.addEventListener('wheel', onPointer, { passive: true });
    root.addEventListener('mouseenter', onEnter);
    root.addEventListener('mouseleave', onLeave);
    document.addEventListener('visibilitychange', onVisibility);
    onVisibility();
    refresh();
    return () => {
      observer.disconnect();
      resizeObserver?.disconnect();
      viewport.removeEventListener('scroll', onScroll);
      viewport.removeEventListener('pointerdown', onPointer);
      viewport.removeEventListener('wheel', onPointer);
      root.removeEventListener('mouseenter', onEnter);
      root.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
      window.clearTimeout(scrollTimer.current);
      cancelLoop.current?.();
      ignoreScroll.current = false;
    };
    // Reattach listeners when the viewport is inserted or replaced.
    // oxlint-disable-next-line react/exhaustive-effect-dependencies
  }, [rootRef, effect, center, viewportVersion]);

  useEffect(() => {
    const root = rootRef.current;
    if (!(root instanceof HTMLElement) || index === null || !count) return;
    slides.forEach((item, itemIndex) => item.classList.toggle('active', itemIndex === index));
  }, [rootRef, index, slides, count]);

  useEffect(() => {
    const root = rootRef.current;
    if (!(root instanceof HTMLElement) || index === null || !count) return;
    const interval = Number(slides[index]?.dataset['bsInterval']) || 5000;
    root.style.setProperty('--bs-carousel-interval', `${interval}ms`);
    if (!playing || hovered || !visible || count < 2) return;
    const timer = window.setTimeout(() => {
      if (ends === 'stop' && index >= lastIndex) setPlaying(false);
      else navigate(index + 1);
    }, interval);
    return () => window.clearTimeout(timer);
  }, [rootRef, index, slides, count, lastIndex, playing, hovered, visible, navigate, ends]);

  return {
    index,
    count,
    lastIndex,
    playing,
    running: playing && !hovered && visible,
    navigate,
    setPlaying,
  };
}
