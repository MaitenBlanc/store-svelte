<script lang="ts">
  import { derived } from 'svelte/store'
  import { cart } from './ts/cartStore'
  import type { CartProduct } from './ts/types'

  let productsInCart = []

  const totalItems = derived(cart, ($cart) => {
    return $cart.reduce((sum: number, item: CartProduct) => sum + item.quantity, 0)
  })

  const subtotal = derived(cart, ($cart) => {
    return $cart.reduce((sum: number, item: CartProduct) => sum + item.product.price * item.quantity, 0)
  })

  cart.subscribe((value) => (productsInCart = value))
</script>

<main>
  <div class="navbar bg-info-content text-base-100 bg-base-100">
    <div class="flex-1">
      <a
        class="store menu-logo ml-15 text-xl"
        href="/">
        STORE
      </a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <a
            class="menu-link"
            href="/">
            HOME
          </a>
        </li>
        <li>
          <a
            class="menu-link"
            href="#products">
            PRODUCTS
          </a>
        </li>
        <li>
          <a
            class="menu-link"
            href="#contact">
            CONTACT
          </a>
        </li>
      </ul>
    </div>

    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="badge badge-sm indicator-item">{$totalItems}</span>
          </div>
        </div>
        <div
          role="menu"
          tabindex="0"
          class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
          <div class="card-body">
            <span class="text-info-content text-lg font-bold">{$totalItems} Items</span>
            <span class="text-info">Subtotal: ${$subtotal.toFixed(2)}</span>
            <div class="card-actions">
              <a
                href="/cart"
                class="button">
                View Cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown dropdown-end">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost btn-circle avatar">
        </div>
      </div>
    </div>
  </div>
</main>

<style lang="postcss">
  .store {
    font-weight: bold;
  }

  .store:hover {
    color: #ffc107;
    font-size: 1.5em;
  }

  .menu-link {
    position: relative;
    text-decoration: none;
    font-weight: bold;
    padding-bottom: 5px;
    padding-left: 0px;
  }

  .menu-link:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ffc107;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  .menu-link:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .menu-link:hover {
    color: #ffc107;
  }

  .menu {
    gap: 3em;
  }

  .button {
    background-color: #ac4db1;
    border: none;
    font-weight: bold;
    color: white;
  }

  .button:hover {
    background-color: #ffc107;
  }
</style>
