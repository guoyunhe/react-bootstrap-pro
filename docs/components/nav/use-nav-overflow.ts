import { useEffect, useRef } from 'react';

export function useNavOverflow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current?.querySelector('.nav-overflow');
    if (!element) return;

    const controller = new AbortController();
    let instance: { dispose: () => void } | undefined;
    void import('bootstrap/js/dist/nav-overflow.js').then(({ default: BootstrapNavOverflow }) => {
      if (!controller.signal.aborted) {
        instance = BootstrapNavOverflow.getOrCreateInstance(element);
      }
    });

    return () => {
      controller.abort();
      instance?.dispose();
    };
  }, []);

  return ref;
}
