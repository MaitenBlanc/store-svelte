<script lang="ts">
  import { cart, removeFromCart, clearCart } from './ts/cartStore'
  import type { Product } from './ts/cartStore'

  let productsInCart: Product[] = []

  cart.subscribe((value) => {
    productsInCart = value
  })
</script>

<div class="cart">
  <h2>Cart</h2>
  <div class="cart-item">
    {#if productsInCart.length > 0}
      <ul>
        {#each productsInCart as product}
          <li>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button on:click={() => removeFromCart(product.id)}>Remove</button>
          </li>
        {/each}
      </ul>
      <button on:click={clearCart}>Clear Cart</button>
    {:else}
      <p>Your cart is empty.</p>
    {/if}
  </div>
</div>

<style>
  .cart {
    padding: 1rem;
    border: 1px solid #ccc;
  }
  .cart-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .cart-item img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
</style>
