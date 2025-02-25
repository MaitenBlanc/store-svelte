<script lang="ts">
  import { cart, removeFromCart, subtotal, totalItems } from '../../lib/components/ts/cartStore'
  import type { CartProduct } from '$lib/components/ts/types'
  import ProductCard from '../../lib/components/productCard.svelte'
  import { goto } from '$app/navigation'

  const updateQuantity = (productId: number, quantity: number) => {
    cart.update((cartItems) => {
      return cartItems.map((item: CartProduct) => {
        if (item.product.id === productId) {
          item.quantity = quantity
        }
        return item
      })
    })
  }

  const proceedToCheckout = () => {
    if ($cart.length > 0) {
      goto('/checkout')
    }
  }
</script>

<main>
  <div class="cart-page">
    <h1 class="title">Your Cart</h1>

    {#if $cart.length > 0}
      <div class="cart-items">
        <table class="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Title</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {#each $cart as { product, quantity }}
            <tbody>
              <ProductCard
                {product}
                {quantity}
                onRemove={() => removeFromCart(product.id)}
                onQuantityChange={(newQuantity) => updateQuantity(product.id, newQuantity)} />
            </tbody>
          {/each}
        </table>
      </div>

      <div class="cart-summary">
        <span>
          Total items: <span class="text-success">{$totalItems}</span>
        </span>
        <span style="display: flex; justify-content: flex-end;">
          Subtotal: &nbsp
          <span class="text-success">${$subtotal.toFixed(2)}</span>
        </span>
      </div>
      <div class="button">
        <button
          class="btn btn-primary"
          on:click={proceedToCheckout}
          disabled={$cart.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    {:else}
      <p>Your cart is empty.</p>
    {/if}
  </div>
</main>

<style lang="postcss">
  .cart-page {
    padding: 1rem;
    border: 1px solid #ccc;
  }

  .title {
    font-size: 3rem;
    margin: 1rem;
    margin-left: 4rem;
    font-weight: bold;
  }

  .table,
  .cart-summary {
    margin: auto;
    width: 90%;
  }

  .cart-summary {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-left: 0.3em;
    padding-right: 3em;
    font-size: 1.5em;
    font-weight: bold;
    flex-direction: column;
    align-items: flex-end;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .btn {
    background-color: #ac4db1;
    border: none;
    font-weight: bold;
    color: white;
  }

  .btn:hover {
    background-color: #ffc107;
  }
</style>
