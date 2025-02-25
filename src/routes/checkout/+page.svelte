<script lang="ts">
  import { cart, subtotal, totalItems } from '$lib/components/ts/cartStore'
  import { goto } from '$app/navigation'

  const proceedWithPayment = () => {
    if ($cart.length === 0) {
      alert('Your cart is empty. Add some items before proceeding to payment.')
      return
    }

    // Acá iría la lógica de pago (plataforma de pago, procesar pago, etc.)
    alert('Proceeding to payment...')

    // Después de realizar el pago, ir a la página de confirmación
    goto('/confirmation')
  }
</script>

<main>
  <div class="checkout-page">
    <h1 class="title">Checkout</h1>

    {#if $cart.length > 0}
      <div class="checkout-summary">
        <h2>Your Order</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Title</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          {#each $cart as { product, quantity }}
            <tbody>
              <tr>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    class="product-image" />
                </td>
                <td>{product.title}</td>
                <td>{quantity}</td>
                <td>${(product.price * quantity).toFixed(2)}</td>
              </tr>
            </tbody>
          {/each}
        </table>
      </div>

      <div class="checkout-summary">
        <span style="display: flex; justify-content: flex-end; margin-right: 6.1em">
          Subtotal: &nbsp; <span class="text-success">
            ${$subtotal.toFixed(2)}
          </span>
        </span>
      </div>

      <form class="checkout-form">
        <h2 class="checkout-summary">Shipping Information</h2>
        <label for="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          required />

        <label for="address">Shipping Address</label>
        <input
          type="text"
          id="address"
          placeholder="Enter your shipping address"
          required />

        <label for="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required />

        <label for="payment-method">Payment Method</label>
        <select
          id="payment-method"
          required>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>

        <div class="button">
          <button
            class="btn btn-primary"
            on:click|preventDefault={proceedWithPayment}
            disabled={$cart.length === 0}>
            Proceed to Payment
          </button>
        </div>
      </form>
    {:else}
      <p>Your cart is empty. Add some items to proceed to checkout.</p>
    {/if}
  </div>
</main>

<style lang="postcss">
  .checkout-page {
    padding: 1rem;
    border: 1px solid #ccc;
  }

  .title {
    font-size: 3rem;
    margin: 1rem;
    font-weight: bold;
  }

  .table {
    margin: auto;
    width: 90%;
  }

  .checkout-summary {
    display: flex;
    flex-direction: column;
    padding-left: 0.3em;
    padding-right: 3em;
    font-size: 1.5em;
    font-weight: bold;
  }

  .checkout-form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    margin-top: 2rem;
  }

  .checkout-form label {
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .checkout-form input,
  .checkout-form select {
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
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

  .product-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
</style>
