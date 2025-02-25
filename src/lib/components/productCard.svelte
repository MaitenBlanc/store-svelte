<script lang="ts">
  import type { CartProduct } from './ts/types'

  export let product: CartProduct['product']
  export let quantity: number

  export let onRemove: () => void
  export let onQuantityChange: (newQuantity: number) => void
</script>

<tr class="cart-item">
  <td>
    <img
      src={product.image}
      alt={product.title}
      class="product-image" />
  </td>
  <td>{product.title}</td>
  <td>
    <input
      type="number"
      min="1"
      bind:value={quantity}
      on:input={() => onQuantityChange(quantity)} />
  </td>
  <td class="price">
    <span class="text-success">
      ${(product.price * quantity).toFixed(2)}
    </span>
  </td>
  <td>
    <button
      class="btn btn-primary"
      on:click={onRemove}>
      Remove
    </button>
  </td>
</tr>

<style lang="postcss">
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  .cart-item img {
    width: 50px;
    height: auto;
  }

  .price {
    font-weight: bold;
    font-size: 1.4em;
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
