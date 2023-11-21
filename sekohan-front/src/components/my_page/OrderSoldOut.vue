<template>
  <v-row>
    <v-col
      v-for="item in pro_sample.slice(page * 4 - 4, page * 4)"
      :key="pro_data"
    >
      <v-card
        class="mx-auto"
        min-height="210"
        max-height="210"
        min-width="600"
        max-width="600"
        v-bind="props"
      >
        <v-row>
          <v-col cols="12" sm="4">
            <v-img
              max-height="170"
              max-width="170"
              min-height="170"
              min-width="170"
              style="margin-top: 20px; margin-left: 20px"
              :src="getImageUrl(item.path)"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="5">
            <v-card-text style="position">
              <v-list-item
                :title="item.proName"
                :subtitle="item.proInfo"
              ></v-list-item>
              <v-list-item>{{ item.proPrice }}￥</v-list-item>
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="3" style="align=right;">
            <v-btn
              disabled
              size="small"
              color="black"
              style="margin-top:130px; ali"
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
      :length="pro_sample.length / 4"
      :total-visible="6"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pro_sample: [],
      page: 1,
    };
  },
  mounted() {
    this.imageData();
  },
  methods: {
    getImageUrl(path) {
      return `http://localhost:7070/images/${path}`;
    },
    imageData() {
      const uId = 2;
      const mylist = `http://localhost:7070/mypage/soldout/${uId}`;
      axios
        .get(mylist)
        .then((response) => {
          console.log(response.data);
          this.pro_sample = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
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
