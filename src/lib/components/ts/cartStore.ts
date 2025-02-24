import { writable } from 'svelte/store';
import type { Product, CartProduct } from './types.ts'

const getCartFromLocalStorage = () => {
    if (typeof localStorage !== 'undefined') {
        const cartData = localStorage.getItem('cart');
        return cartData ? JSON.parse(cartData) : [];
    }
    return [];
};

// Store for the cart
export const cart = writable(getCartFromLocalStorage());

// Add a product to the cart
export function addToCart(product: Product) {
    cart.update(items => {
        const existingProduct = items.find((item: CartProduct) => item.product.id === product.id)

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            items.push({ product, quantity: 1 })
        }

        return items;
    })
}

// Remove a product from the cart
export function removeFromCart(productId: number) {
    cart.update(items => items.filter((item: CartProduct) => item.product.id !== productId))
}

// Clear the cart
export function clearCart() {
    cart.set([])
}