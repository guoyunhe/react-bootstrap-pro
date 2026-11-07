const scrollLocks = new Set<HTMLDialogElement>();
let hadScrollLock = false;

export function lockDialogScroll(dialog: HTMLDialogElement) {
  if (!scrollLocks.size) hadScrollLock = document.documentElement.classList.contains('dialog-open');
  scrollLocks.add(dialog);
  document.documentElement.classList.add('dialog-open');
}

export function unlockDialogScroll(dialog: HTMLDialogElement) {
  if (!scrollLocks.delete(dialog) || scrollLocks.size || hadScrollLock) return;
  document.documentElement.classList.remove('dialog-open');
}
