<template>
  <v-sheet class="mx-auto" max-width="1000" flat>
    <h1>추천상품</h1>
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item
        v-for="i in data"
        :key="i"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-container fluid style="min-height: 100px">
          <v-card class="mx-auto-content" height="230" width="150" @click="">
            <v-img
              :src="i.src"
              class="align-end text-white"
              height="160"
              width="150"
            >
            </v-img>
              <v-list-item >{{ i.title }}</v-list-item>
              <v-list-item >{{ i.price }}원</v-list-item>
          </v-card>
        </v-container>
        <div class="d-flex fill-height align-center justify-center">
          <v-scale-transition>
            <v-icon
              v-if="isSelected"
              color="white"
              size="48"
              icon="mdi-close-circle-outline"
            ></v-icon>
          </v-scale-transition>
        </div>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
import pro_sample from "@/assets/json/pro_sample.json";

export default {
  data() {
    return {
      data: pro_sample,
      model: null,
    };
  },
};
</script>
