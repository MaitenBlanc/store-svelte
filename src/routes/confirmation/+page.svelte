<script lang="ts">
  import { cart } from '../../lib/components/ts/cartStore'
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'

  let purchasedItems: any[] = []

  onMount(() => {
    purchasedItems = $cart
    cart.set([])
  })
</script>

<main class="confirmation-page">
  <h1 class="title">Thank you for your purchase!</h1>
  <p>Your order has been successfully placed.</p>

  <div class="order-summary">
    <h2>Order Summary</h2>
    {#each purchasedItems as { product, quantity }}
      <div class="order-item">
        <img
          src={product.image}
          alt={product.title}
          class="product-image" />
        <div>
          <p><strong>{product.title}</strong></p>
          <p>Quantity: {quantity}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      </div>
    {/each}
  </div>

  <button
    class="btn"
    on:click={() => goto('/')}>
    Back to Home
  </button>
</main>

<style lang="postcss">
  .confirmation-page {
    text-align: center;
    padding: 2rem;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
  }

  .order-summary {
    margin: 2rem auto;
    width: 80%;
    border: 1px solid #ccc;
    padding: 1rem;
  }

  .order-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 1rem 0;
  }

  .product-image {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
  }

  .btn {
    background-color: #ac4db1;
    border: none;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .btn:hover {
    background-color: #ffc107;
  }
</style>
