<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="auto">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" icon flat>
          <svg-icon type="mdi" :path="path" />
        </v-btn>
      </template>
      <v-card width="700px">
        <v-card-title class="text-h5"> 검색창 </v-card-title>
        <v-toolbar dense floating>
          <v-text-field
            hide-details
            prepend-icon="mdi-magnify"
            single-line
          ></v-text-field>
        </v-toolbar>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
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
    };
  },
};
</script>
