<template>
    <productlist />

  </template>
  
  <script>
    import productlist from '@/productpage/productlist.vue';

    export default {
        data: () => ({
      model: null,
    }),
    components: { productlist, category}

    }
  </script>