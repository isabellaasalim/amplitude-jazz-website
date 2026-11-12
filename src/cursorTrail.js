// A bounded DOM-only effect: no React state, animation loop, or layout reads.
// CSS owns the 720ms transform/opacity animation. Change MAX_NOTES / INTERVAL
// here and .cursor-note in styles.css to tune the effect.
export function attachCursorTrail(host, environment = window) {
  const preference = environment.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  const MAX_NOTES = 6;
  const INTERVAL = 115;
  let lastTime = -Infinity;
  let lastPoint = null;
  const timers = new Map();
  const remove = note => {
    environment.clearTimeout(timers.get(note));
    timers.delete(note);
    note.remove();
  };
  const clear = () => {
    [...timers.keys()].forEach(remove);
    lastPoint = null;
    lastTime = -Infinity;
  };
  const move = event => {
    if (!preference.matches || event.pointerType !== 'mouse' || event.buttons ||
      event.target?.closest('input, textarea, [contenteditable]:not([contenteditable="false"])')) return;
    const now = environment.performance.now();
    if (now - lastTime < INTERVAL) return;
    if (lastPoint && Math.hypot(event.clientX - lastPoint.x, event.clientY - lastPoint.y) < 16) return;
    if (timers.size >= MAX_NOTES) remove(timers.keys().next().value);
    const note = host.ownerDocument.createElement('span');
    note.className = 'cursor-note';
    note.textContent = '♫';
    // Offset behind the cursor; nothing covers the click point.
    note.style.left = `${event.clientX - 13}px`;
    note.style.top = `${event.clientY + 10}px`;
    host.appendChild(note);
    timers.set(note, environment.setTimeout(() => remove(note), 780));
    lastTime = now;
    lastPoint = { x: event.clientX, y: event.clientY };
  };
  const sync = () => {
    environment.removeEventListener('pointermove', move);
    clear();
    if (preference.matches) environment.addEventListener('pointermove', move, { passive: true });
  };
  preference.addEventListener('change', sync);
  environment.addEventListener('blur', clear);
  environment.addEventListener('scroll', clear, { passive: true });
  sync();
  return () => {
    environment.removeEventListener('pointermove', move);
    environment.removeEventListener('blur', clear);
    environment.removeEventListener('scroll', clear);
    preference.removeEventListener('change', sync);
    clear();
  };
}
