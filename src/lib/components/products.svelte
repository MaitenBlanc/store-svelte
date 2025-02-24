<script lang="ts">
  import { onMount } from 'svelte'
  import Card from './card.svelte'
  import type { Product } from './ts/types.ts'

  let products: Product[] = []
  const url = 'https://fakestoreapi.com'

  onMount(async () => {
    try {
      const res = await fetch(`${url}/products`)
      products = await res.json()
    } catch (error) {
      console.log('Error fetching: ', error)
    }
  })
</script>

<main>
  <h1 class="title">Products</h1>
  <div
    id="products"
    class="container">
    {#if products.length > 0}
      {#each products as product}
        <div class="card">
          <Card {product} />
        </div>
      {/each}
    {:else}
      <p>Loading products...</p>
    {/if}
  </div>
</main>

<style lang="postcss">
  .title {
    font-size: 3rem;
    margin: 1rem;
    margin-left: 4rem;
    font-weight: bold;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 0 auto;
    margin-bottom: 5rem;
  }

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
