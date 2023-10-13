<template>
  <v-row>
    <v-col v-for="pro_data in data.slice(0,5)" :key="pro_data">
      <v-card
        class="mx-auto"
        min-height="150"
        max-height="150"
        max-width="800"
        v-bind="props"
      >
        <v-row>
          <v-col cols="12" sm="4">
            <v-img
              width="300"
              style="margin-top: 10px"
              :src="pro_data.src"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card-text style="position">
              <v-list-item
                :title="pro_data.title"
                :subtitle="pro_data.subtitle"
              ></v-list-item>
              <v-list-item>{{ pro_data.price }}￥</v-list-item>
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="4" style="align=right;">
            <v-btn size="small" color="blue" style="margin-top:100px;" :href="pro_data.url"
              >게시글수정</v-btn>
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
};
</script>
