import { NavOverflow as BootstrapNavOverflow } from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useRef } from 'react';

export function useNavOverflow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current?.querySelector('.nav-overflow');
    if (!element) return;

    const instance = BootstrapNavOverflow.getOrCreateInstance(element);

    return () => {
      instance.dispose();
    };
  }, []);

  return ref;
}
