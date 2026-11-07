import { Drawer as BootstrapDrawer } from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useRef } from 'react';

export function useDrawerCleanup() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    return () => {
      container?.querySelectorAll('dialog.drawer').forEach((dialog) => {
        BootstrapDrawer.getInstance(dialog)?.dispose();
      });
    };
  }, []);

  return ref;
}
