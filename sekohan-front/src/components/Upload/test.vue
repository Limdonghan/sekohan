<template>
  <v-col cols="12" sm="6" style="background-color: papayawhip">
    <div class="col-md-7 col-sm-7 col-xs-12" style="height: 400px">
      <v-breadcrumbs class="pb-0" :items="breadcrumbs"></v-breadcrumbs>
      <div class="pl-6">
        <p class="display-1 mb-0" style="font-size: 22px">{{ pro_data.proInfo }}</p>
        <p class="size" style="font-size: 13px">{{ pro_data.proName }}</p>
        <v-card-actions class="pa-0">
          <p class="headline font-weight-light pt-3" style="font-size: 14px">{{ pro_data.proPrice }}</p>
          <v-spacer></v-spacer>
        </v-card-actions>
        <div class="subtitle-1 font-weight-thin" style="height: 200px; font-size: 17px">
          <div>{{ pro_data.proInfo }}</div>
        </div>
        <v-btn class="primary white--text" outlined tile dense>
          <v-icon>mdi-cart</v-icon>찜목록 추가
        </v-btn>
        <v-btn class="ml-4" outlined tile>
          <v-icon color="error" icon="mdi-alert-circle"></v-icon>개시글 신고
        </v-btn>
      </div>
    </div>
  </v-col>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pro_data: {},
      breadcrumbs: [
        {
          text: 'Home',
          disabled: false,
          href: '/home',
        },
        {
          text: 'Product',
          disabled: false,
          href: '/product',
        },
        {
          text: 'Details',
          disabled: true,
        },
      ],
    };
  },
  mounted() {
    this.imageData();
  },
  methods: {
    imageData() {
      const pageId = this.$route.params.pageId;
      axios
        .get(`http://localhost:7070/products/page/${pageId}`)
        .then((response) => {
          this.pro_data = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>