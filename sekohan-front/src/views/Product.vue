<template>
  <productlist />
</template>

<script>
import productlist from "@/product_page/ProductList.vue";

export default {
  data: () => ({
    model: null,
  }),
  components: { productlist },
};
</script>
