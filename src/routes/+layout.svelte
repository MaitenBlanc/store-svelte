<script lang="ts">
  import Footer from '$lib/components/footer.svelte'
  import Menu from '$lib/components/menu.svelte'
  import '../app.css'
</script>

<main>
  <Menu />
  <slot />
  <Footer />
</main>
