<script lang="ts">
  import { addToCart } from './ts/cartStore.js'
  import type { Product } from './ts/types.ts'

  export let product: Product

  const handleAddToCart = (product: Product) => {
    addToCart(product)
  }
</script>

<main>
  <div class="card card-compact bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        class="img"
        src={product.image}
        alt={product.title} />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {product.title.length > 24 ? product.title.slice(0, 24) + '...' : product.title}
      </h2>
      <p>
        {product.description.length > 50 ? product.description.slice(0, 50) + '...' : product.description}
      </p>
      <p class="price">${product.price}</p>
      <button
        class="btn btn-primary"
        on:click={() => handleAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  </div>
</main>

<style lang="postcss">
  .card {
    width: 20rem;
    max-width: 20rem;
    max-height: auto;
  }

  .img {
    width: 100%;
    height: 10rem;
    object-fit: contain;
  }

  .price {
    color: rgb(2, 163, 2);
    font-size: 1.5rem;
    font-weight: 600;
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
