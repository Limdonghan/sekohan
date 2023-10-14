<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" activator="parent" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" icon flat>
          <svg-icon type="mdi" :path="path" />
        </v-btn>
      </template>
      <v-card class="mx-auto" color="grey-lighten-3" min-width="800">
        <v-card-text>
          <v-text-field
            :loading="loading"
            density="compact"
            variant="solo"
            label="Search templates"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            @click:append-inner="onClick"
          ></v-text-field>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiTabSearch } from "@mdi/js";
export default {
  name: "my-component",
  components: {
    SvgIcon,
  },
  data() {
    return {
      dialog: false,
      path: mdiTabSearch,
      loaded: false,
      loading: false,
    };
  },
  methods: {
      onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
};
</script>
