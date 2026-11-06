// A tiny shop: just enough code for a CI/CD demo.
export const buttonLabel = 'Buy now';

export function addToCart(cart, item) {
  return [...cart, item];
}

export function formatPrice(cents) {
  return '$' + (cents / 100).toFixed(2);
}

export function openCheckout(cart) {
  return { open: cart.length > 0, items: cart.length };
}

export function login(user, password) {
  return { ok: Boolean(user && password) };
}
