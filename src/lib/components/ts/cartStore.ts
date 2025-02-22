import { writable } from 'svelte/store';

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

// Store for the cart
export const cart = writable<Product[]>([]);

// Add a product to the cart
export function addToCart(product: Product) {
    cart.update(items => [...items, product])
}

// Remove a product from the cart
export function removeFromCart(productId: number) {
    cart.update(items => items.filter(item => item.id !== productId))
}

// Clear the cart
export function clearCart() {
    cart.set([])
}