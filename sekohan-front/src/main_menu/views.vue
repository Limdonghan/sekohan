<template>
  <v-sheet class="mx-auto" max-width="1000" flat>
    <h1>인기상품</h1>
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 15"
        :key="n"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-container fluid style="min-height: 100px">
          <v-card class="mx-auto-content" height="230" width="150" @click="">
            <v-img
              src="@/assets/sekohan_logo.png"
              class="align-end text-white"
              height="160"
              width="150"
            >
            </v-img>
            <v-card-title>상품 이름</v-card-title>
            <v-card-text>
              <div>가격</div>
            </v-card-text>
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
export default {
  data: () => ({
    model: null,
  }),
};
</script>
