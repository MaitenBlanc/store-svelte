<script lang="ts">
  import Contact from '$lib/components/contact.svelte'
  import Footer from '$lib/components/footer.svelte'
  import Menu from '$lib/components/menu.svelte'
  import Products from '$lib/components/products.svelte'

  // let {data} = $props();

  // console.log(data);
  // console.log(data.objectName);
</script>

<main>
  <Menu />
  <Products />
  <Contact />
  <Footer />
</main>
