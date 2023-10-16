<template>
  <v-menu :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-btn icon flat v-bind="props">
        <svg-icon type="mdi" :path="path" />
      </v-btn>
    </template>
    <v-card
      style="
        max-width: 280px;
        max-height: 200px;
        min-width: 270px;
        min-height: 200px;
      "
      v-for="item in data.slice(0, 2)"
      :key="item"
    >
      <v-row>
        <v-col cols="12" sm="1"></v-col>
        <v-col cols="12" sm="3">
          <v-btn style="margin-top: 20px" flat>
            <v-img width="70px" :src="item.src" />
          </v-btn>
        </v-col>
        <v-col cols="12" sm="7">
          <v-list-item
            style="margin-top: 20px; font-size: 1.6rem"
            :title="item.title"
          ></v-list-item>
          <v-list-item style="margin-bottom: 20px; font-size: 1.2rem"
            >{{ item.price }}￥</v-list-item
          >
        </v-col>
      </v-row>

      <v-btn outlined>상품 더 보기</v-btn>

      <v-btn outlined>제거하기</v-btn>
    </v-card>
  </v-menu>
  <v-divider></v-divider>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCartOutline } from "@mdi/js";
import pro_data from "@/assets/json/pro_sample.json";

export default {
  components: {
    SvgIcon,
  },
  data() {
    return {
      data: pro_data,
      path: mdiCartOutline,
    };
  },
};
</script>
