<template>
    <Event />
    <Popularity />
    <Views />

  </template>
  
  <script>
    import Event from '@/main_menu/event.vue';
    import Popularity from '@/main_menu/popularity.vue';
    import Views from '@/main_menu/views.vue'; 

    export default {
        data: () => ({
      model: null,
    }),
    components: { Event, Popularity, Views }
    }
  </script>
    <style scoped>
    .mx-auto {
        margin: 5% 10%;
    }
    </style>