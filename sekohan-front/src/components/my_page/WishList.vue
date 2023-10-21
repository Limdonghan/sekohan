<template>
  <v-row>
    <v-col v-for="pro_data in data.slice((page*5)-5, page*5)" :key="pro_data">
      <v-card
        class="mx-auto"
        min-height="180"
        max-height="180"
        min-width="600"
        max-width="600"
        v-bind="props"
      >
        <v-row>
          <v-col cols="12" sm="4">
            <v-img
              width="160"
              style="margin-top: 10px; margin-left: 10px;" 
              :src="pro_data.src"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="5">
            <v-card-text style="position ">
              <v-list-item
                :title="pro_data.title"
                :subtitle="pro_data.subtitle"
              ></v-list-item>
              <v-list-item>{{ pro_data.price }}￥</v-list-item>
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="3" style="align=right;">
            <v-btn
              size="small"
              color="blue"
              style="margin-top: 100px; min-width: 100px"
              >찜 목록 빼기</v-btn
            >
            <p></p>
            <v-btn
              :href="url"
              size="small"
              color="blue"
              style="margin-top: 10px; min-width: 100px"
              ><v-icon>mdi-information</v-icon>상세 정보</v-btn
            >
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="5"
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
