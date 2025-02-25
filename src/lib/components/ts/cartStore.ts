import { derived, writable } from 'svelte/store';
import type { Product, CartProduct } from './types.ts'
import { supabase } from '$lib/supabaseClient.js';


// Store for the cart
export const cart = writable<CartProduct[]>([]);

export let totalItems = derived(cart, ($cart) => {
    return $cart.reduce((sum: number, item: CartProduct) => sum + item.quantity, 0)
})

export let subtotal = derived(cart, ($cart) => {
    return $cart.reduce((sum: number, item: CartProduct) => sum + item.product.price * item.quantity, 0)
})

// Load cart data from Supabase
export async function loadCart() {
    const { data, error } = await supabase.from('cart').select('*');

    if (error) {
        console.error('Error fetching cart data:', error);
        return;
    }

    cart.set(data.map(item => ({
        product: {
            id: item.product_id,
            title: item.title,
            description: item.description,
            price: item.price,
            image: item.image,
            category: item.category
        },
        quantity: item.quantity
    })))
}

// Add a product to the cart
export async function addToCart(product: Product) {
    const { data: existingItem, error: selectError } = await supabase
        .from('cart')
        .select('*')
        .eq('product_id', product.id)
        .single()

    if (selectError && selectError.code !== 'PGRST116') {
        console.error('Error checking existing cart item:', selectError)
        return
    }

    if (existingItem) {
        const { error: updateError } = await supabase
            .from('cart')
            .update({ quantity: existingItem.quantity + 1 })
            .eq('product_id', product.id)

        if (updateError) {
            console.error('Error updating cart quantity:', updateError)
            return
        }
    } else {
        const { error: insertError } = await supabase.from('cart').insert([
            {
                product_id: product.id,
                title: product.title,
                description: product.description,
                price: product.price,
                image: product.image,
                category: product.category,
                quantity: 1
            }
        ])

        if (insertError) {
            console.error('Error adding to cart:', insertError)
            return
        }
    }

    loadCart()
}

// Remove a product from the cart
export async function removeFromCart(productId: number) {
    const { error } = await supabase
        .from('cart')
        .delete()
        .eq('product_id', productId)

    if (error) {
        console.error('Error removing from cart:', error)
        return
    }

    loadCart()
}

// Clear the cart
export async function clearCart() {
    const { error } = await supabase.from('cart').delete()
    if (error) {
        console.error('Error clearing cart:', error)
        return
    }
    loadCart()
}

// Load cart data on page load
loadCart()