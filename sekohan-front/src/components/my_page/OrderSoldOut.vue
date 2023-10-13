<template>
  <v-row>
    <v-col v-for="i in data" :key="i">
      <v-card
        class="mx-auto"
        min-height="200"
        max-height="200"
        max-width="800"
        v-bind="props"
      >
        <v-row>
          <v-col cols="12" sm="4">
            <v-img
              :src="i.src"
              min-height="180"
              max-height="180"
              style="margin-top: 10px"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="5">
            <v-card-text style="position ">
              <v-list-item
                :title="i.title"
                :subtitle="i.subtitle"
                :href="i.url"
                class="px-0"
              ></v-list-item>
              <v-list-item :subtitle="i.price + '원'"></v-list-item>
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="3" style="align=right; ">
            <v-btn
              disabled
              size="small"
              color="black"
              style="margin-top:150px; ali"
              >판매 완료</v-btn
            >
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="1"
      :total-visible="6"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
</template>

<script>
import pro_sample from "@/assets/json/pro_sample.json";
export default {
  data() {
    return {
      data: pro_sample,
      page: 1,
    };
  },
  data: () => ({
    tab: null,
  }),
};
</script>
