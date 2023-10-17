<template>
  <Event />
  <Popularity />
  <Views />
</template>

<script>
import Event from "@/components/main_content/Event.vue";
import Popularity from "@/components/main_content/Popularity.vue";
import Views from "@/components/main_content/Views.vue";

export default {
  data: () => ({
    model: null,
  }),
  components: { Event, Popularity, Views },
};
</script>
<style scoped>
.mx-auto {
  margin: 5% 10%;
}
</style>
