<template>
  <v-btn flat>
    <svg-icon type="mdi" :path="path" />
  </v-btn>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCartOutline } from "@mdi/js";

export default {
  name: "my-component",
  components: {
    SvgIcon,
  },
  data() {
    return {
      path: mdiCartOutline,
    };
  },
};
</script>
