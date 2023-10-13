<template>
  <v-row id="orderSoldOut">
    <v-col v-for="pro_data in data.slice(0, 6)" :key="pro_data">
      <v-card
        class="mx-auto"
        min-height="200"
        max-height="200"
        min-width="500"
        max-width="500"
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
          <v-col cols="12" sm="5">
            <v-card-text style="position" class="text-h5">
              <v-list-item
                class="test"
                :title="pro_data.title"
                :subtitle="pro_data.subtitle"
              ></v-list-item>
              <v-list-item>{{ pro_data.price }}￥</v-list-item>
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="3" style="align=right;">
            <v-btn
              disabled
              size="small"
              color="black"
              style="margin-top:150px; ali"
            >
              판매 완료</v-btn
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
  // data: () => ({
  //   tab: null,
  // }),
};
</script>
<style>

#orderSoldOut .v-card-text {
  position: absolute;
}

#orderSoldOut .v-list-item-title {
  font-size: 1.4rem;
  margin-bottom: 4px;
}

#orderSoldOut .v-list-item-subtitle {
  font-size: 1.2rem;
}

#orderSoldOut .v-list-item {
  padding-top: 14px;
  padding-bottom: 10px;
}

#orderSoldOut .v-btn__content {
  font-size: 1.15rem;
}

</style>
