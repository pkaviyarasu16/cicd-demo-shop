import test from 'node:test';
import assert from 'node:assert/strict';
import { buttonLabel, addToCart, formatPrice, openCheckout, login } from '../src/shop.js';

test('adds item to cart', () => {
  assert.deepEqual(addToCart([], 'mug'), ['mug']);
});

test('shows the price', () => {
  assert.equal(formatPrice(1299), '$12.99');
});

test('button says "Add to cart"', () => {
  assert.equal(buttonLabel, 'Add to cart');
});

test('checkout opens', () => {
  assert.equal(openCheckout(['mug']).open, true);
});

test('login still works', () => {
  assert.equal(login('ana', 'secret').ok, true);
});
