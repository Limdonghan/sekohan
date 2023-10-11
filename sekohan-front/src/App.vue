<template>
    <HeaderBar />
    <router-view />
    <Footers />
</template>

<script>
import Footers from '@/components/Footers.vue';
import HeaderBar from '@/components/HeaderBar.vue'

export default {
  name: 'App',
  components: {
    HeaderBar,
    Footers,
  }
}

</script>
