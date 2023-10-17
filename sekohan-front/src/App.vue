<template>
  <HeaderBar />
  <router-view />
  <Footers />
</template>

<script>
import Footers from '@/components/sementic/Footers.vue';
import HeaderBar from '@/components/sementic/HeaderBar.vue'

export default {
name: 'App',
components: {
  HeaderBar,
  Footers,
}
}

</script>
