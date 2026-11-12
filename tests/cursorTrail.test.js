import { test } from 'node:test';
import assert from 'node:assert/strict';
import { attachCursorTrail } from '../src/cursorTrail.js';

function setup(matches = true) {
  const listeners = new Map();
  const timeouts = new Map();
  let time = 0;
  let next = 0;
  const children = new Set();
  const preference = { matches, addEventListener: (_, fn) => { preference.change = fn; }, removeEventListener: () => {} };
  const host = {
    ownerDocument: { createElement: () => ({ style: {}, remove() { children.delete(this); } }) },
    appendChild: note => children.add(note),
  };
  const environment = {
    matchMedia: () => preference,
    performance: { now: () => time },
    setTimeout: (fn, delay) => { assert.equal(delay, 780); timeouts.set(++next, fn); return next; },
    clearTimeout: id => timeouts.delete(id),
    addEventListener: (type, fn) => listeners.set(type, fn),
    removeEventListener: type => listeners.delete(type),
  };
  const cleanup = attachCursorTrail(host, environment);
  return { children, listeners, timeouts, preference, cleanup,
    move(t, overrides = {}) { time = t; listeners.get('pointermove')?.({ pointerType: 'mouse', clientX: t, clientY: 50, buttons: 0, target: { closest: () => null }, ...overrides }); } };
}
test('movement is throttled, spatially spaced, and capped at six notes', () => {
  const s = setup();
  s.move(0); s.move(30); s.move(110);
  assert.equal(s.children.size, 1);
  s.move(120, { clientX: 2 });
  assert.equal(s.children.size, 1);
  for (let t = 150; t < 2000; t += 150) s.move(t);
  assert.equal(s.children.size, 6);
  assert.equal(s.timeouts.size, 6);
  for (const fn of [...s.timeouts.values()]) fn();
  assert.equal(s.children.size, 0);
  s.cleanup();
});
test('touch, dragging, and editable text do not create notes', () => {
  const s = setup();
  s.move(0, { pointerType: 'touch' });
  s.move(200, { buttons: 1 });
  s.move(400, { target: { closest: () => ({}) } });
  assert.equal(s.children.size, 0);
  s.cleanup();
});
test('preference changes, scroll, blur, and unmount clear notes and listeners', () => {
  const s = setup(false);
  assert.ok(!s.listeners.has('pointermove'));
  s.preference.matches = true; s.preference.change();
  s.move(0); assert.equal(s.children.size, 1);
  s.listeners.get('scroll')(); assert.equal(s.children.size, 0);
  s.move(200); s.listeners.get('blur')(); assert.equal(s.children.size, 0);
  s.move(400); s.preference.matches = false; s.preference.change();
  assert.equal(s.children.size, 0);
  assert.ok(!s.listeners.has('pointermove'));
  s.preference.matches = true; s.preference.change(); s.move(600);
  s.cleanup();
  assert.equal(s.listeners.size, 0);
  assert.equal(s.timeouts.size, 0);
  assert.equal(s.children.size, 0);
});
