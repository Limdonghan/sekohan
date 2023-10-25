<template>
  <v-row>
    <v-col cols="12" sm="2">
      <v-list v-model:opened="open" style="margin-top: 15%">
        <v-list-group value="Users">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="대분류"></v-list-item>
          </template>

          <v-list-group value="Admin">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="중분류"></v-list-item>
            </template>

            <v-list-item
              v-for="([title, href], i) in admins"
              :key="i"
              :title="title"
              :value="title"
              :href="href"
            ></v-list-item>
          </v-list-group>

          <v-list-group value="Actions">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="중분류"></v-list-item>
            </template>

            <v-list-item
              v-for="([title], i) in cruds"
              :key="i"
              :value="title"
              :title="title"
            ></v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
      <v-card> </v-card>
    </v-col>
    <v-col cols="12" sm="10">
      <div
        style="
          margin-left: 3%;
          margin-top: 3%;
          margin-bottom: 1%;
          margin-right: 3%;
        "
      >
        <v-row dense>
          <v-col style="margin-top: 15px" cols="12" sm="8">
            전자재품 > 컴퓨터/주변기기 > 노트북
          </v-col>
          <v-col cols="12" sm="2">
            <v-select
              v-model="select1"
              @update:model-value="onItemSelect()"
              class="pa-0"
              :items="options1.map((option) => option.value)"
              style="margin-bottom: -20px; margin-right: 10%"
              outlined
            ></v-select>
          </v-col>
          <v-col cols="12" sm="2">
            <v-select
              v-model="select2"
              @update:model-value="onSecondItemSelect"
              :items="options2.map((option) => option.value)"
              style="margin-bottom: -20px; margin-right: 10%"
              outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-card theme="white" max-width="100%" rounded="1g">
          <v-container class="text-center">
            <v-row>
              <v-col
                v-for="item in pro_image"
                :key="item"
                cols="12"
                md="6"
                lg="2"
              >
                <v-hover v-slot="{ isHovering, props }">
                  <v-card
                    class="mx-auto"
                    min-height="370"
                    max-height="370"
                    max-width="270"
                    v-bind="props"
                  >
                    <v-img
                      min-height="245"
                      max-height="245"
                      :src="getImageUrl(item.path)"
                    ></v-img>

                    <v-card-text style="position ">
                      <v-list-item
                        :title="item.productId.proName"
                        :subtitle="item.productId.proInfo"
                        class="px-0"
                      ></v-list-item>
                      <v-list-item
                        :subtitle="item.productId.proPrice + '원'"
                      ></v-list-item>
                    </v-card-text>

                    <v-overlay
                      :model-value="isHovering"
                      contained
                      scrim="#958648"
                      class="align-center justify-center"
                    >
                    <v-btn :href="`/product/page/${item.productId.productId}`">상세 보기</v-btn>
                    </v-overlay>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>

            <br />

            <v-chip size="large" variant="text">
              <template v-slot:prepend>
                <v-icon color="disabled"></v-icon>
              </template>

              <div class="text-center">
                <v-pagination
                  v-model="page"
                  :length="pro_image.length/2"
                  :total-visible="6"
                  prev-icon="mdi-menu-left"
                  next-icon="mdi-menu-right"
                ></v-pagination>
              </div>
            </v-chip>
          </v-container>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      page: 1,
      pro_image: [],
      open: ["Users"],
      admins: [["삼성", "/product/"], ["애플"]],
      cruds: [["유아"], ["어린이"], ["여성"], ["남성"]],
      select1: "가격순",
      select2: "시간순",
      options1: [
        { key: 1, value: "가격높은순" },
        { key: 2, value: "가격낮은순" },
      ],
      options2: [
        { key: 1, value: "최신순" },
        { key: 2, value: "과거순" },
      ],
    };
  },
  mounted() {
    this.imageData();
  },
  methods: {
    getImageUrl(path) {
      return `http://localhost:7070/images/${path}`;
    },
    priceselectlow() {
      this.pro_image.sort(
        (a, b) => a.productId.proPrice - b.productId.proPrice
      );
    },
    priceselecthigh() {
      this.pro_image.sort(
        (a, b) => b.productId.proPrice - a.productId.proPrice
      );
    },
    timeslectnew() {
      this.pro_image.sort(
        (a, b) => a.productId.productId - b.productId.productId
      );
    },
    timeselectold() {
      this.pro_image.sort(
        (a, b) => b.productId.productId - a.productId.productId
      );
    },
    onItemSelect() {
      console.log();
      if (this.select1 === "가격높은순") {
        this.priceselecthigh();
      } else if (this.select1 === "가격낮은순") {
        this.priceselectlow();
      }
    },
    onSecondItemSelect() {
      if (this.select2 === "최신순") {
        this.timeselectold();
      } else if (this.select2 === "과거순") {
        this.timeslectnew();
      }
    },
    imageData() {
      axios
        .get("http://localhost:7070/products/imagelist")
        .then((response) => {
          console.log(response.data);
          this.pro_image = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>
