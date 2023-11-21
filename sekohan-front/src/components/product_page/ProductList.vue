<template>
  <v-row>
    <v-col cols="12" sm="2">
      <v-list v-model:opened="open" style="margin-top: 15%">
        <v-list-item>
          <v-list-item-content class="text-center">
            <v-list-item-title
              class="headline font-weight-bold"
              style="font-size: 140%"
              >카테고리</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-group
          v-for="category in categories[0].subcategories"
          :key="category.id"
          :value="category.name"
        >
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :title="category.name"></v-list-item>
          </template>
          <v-list-group
            v-for="subCategory in category.subcategories"
            :key="subCategory.id"
            :value="subCategory.name"
          >
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :title="subCategory.name"
              ></v-list-item>
            </template>
            <v-list-item
              v-for="(subSubCategory, i) in subCategory.subcategories"
              :key="subSubCategory.id"
              :value="subSubCategory.name"
              :href="`http://localhost:3000/product/list/${subSubCategory.id}`"
            >
              {{ subSubCategory.name }}
            </v-list-item>
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
            전체 카테고리
          </v-col>
          <v-col cols="12" sm="2">
            <v-select
              v-model="select1"
              class="pa-0"
              :items="options1.map((option) => option.value)"
              style="margin-bottom: -20px; margin-right: 10%"
              outlined
            ></v-select>
          </v-col>
          <v-col cols="12" sm="2">
            <v-select
              v-model="select2"
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
                v-for="item in pro_image.slice(12 - 12, 12)"
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
                      ><v-card v-if="item.status == 2">판매완료</v-card>
                      <v-card v-if="item.status == 1">거래중</v-card>
                    </v-img>

                    <v-card-text style="position ">
                      <v-list-item
                        :title="item.proName"
                        :subtitle="item.proInfo"
                        class="px-0"
                      ></v-list-item>
                      <v-list-item
                        :subtitle="item.proPrice + '원'"
                      ></v-list-item>
                    </v-card-text>

                    <v-overlay
                      :model-value="isHovering"
                      contained
                      scrim="#958648"
                      class="align-center justify-center"
                    >
                      <v-btn :href="`/product/page/${item.productId}`"
                        >상세 보기</v-btn
                      >
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
                  @update="pageupdate"
                  v-model="page"
                  :length="lengthpage"
                  :total-visible="7"
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
import category from "@/assets/json/category.json";
export default {
  data() {
    return {
      categories: category,
      page: 1,
      lengthpage: 0,
      totalproduct: 0,
      pro_image: [],
      open: ["Users"],
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
  watch: {
  page() {
    this.pageupdate();
  },
  select1(newValue) {
    if (newValue === "가격높은순" || newValue === "가격낮은순") {
      this.select2 = "시간순";
      this.selectupdate();
    }
  },
  select2(newValue) {
    if (newValue === "최신순" || newValue === "과거순") {
      this.select1 = "가격순";
      this.selectupdate();
    }
  },
},
  methods: {
    pageupdate() {
      console.log("page 이동");
      this.imageData();
    },
    selectupdate() {
      console.log("select 선택");
      this.imageData();
    },
    getImageUrl(path) {
      return `http://localhost:7070/images/${path}`;
    },
    imageData() {
      let currentPath = window.location.pathname;
      let pageid = currentPath.split("/").pop();

      if (pageid > 1) {
        if(this.select1 === "가격높은순"){
          console.log("가격높은순");
          URL = `http://localhost:7070/products/list/${pageid}?page=${this.page - 1}&sort=proPrice,desc`;;  
        }else if(this.select1 === "가격낮은순"){
          console.log("가격낮은순");
          URL = `http://localhost:7070/products/list/${pageid}?page=${this.page - 1}&sort=proPrice,asc`;
        }else if(this.select2 === "최신순"){
          console.log("최신순");
          URL = `http://localhost:7070/products/list/${pageid}?page=${this.page - 1}&sort=productId,desc`;
        }else if(this.select2 === "과거순"){
          console.log("과거순");
          URL = `http://localhost:7070/products/list/${pageid}?page=${this.page - 1}&sort=productId,asc`;
        }else{
          console.log("기본최신순")
          URL = `http://localhost:7070/products/list/${pageid}?page=${this.page - 1}&sort=productId,desc`;
        }
        axios
          .get(URL)
          .then((response) => {
            console.log(response.data);
            this.pro_image = response.data.content;
            this.lengthpage = response.data.totalPages;
            this.totalproduct = response.data.totalElemenets;
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      } else {
        if(this.select1 === "가격높은순"){
          console.log("가격높은순");
          URL = `http://localhost:7070/products/list?page=${this.page - 1}&sort=proPrice,desc`;;  
        }else if(this.select1 === "가격낮은순"){
          console.log("가격낮은순");
          URL = `http://localhost:7070/products/list?page=${this.page - 1}&sort=proPrice,asc`;
        }else if(this.select2 === "최신순"){
          console.log("최신순");
          URL = `http://localhost:7070/products/list?page=${this.page - 1}&sort=productId,desc`;
        }else if(this.select2 === "과거순"){
          console.log("과거순");
          URL = `http://localhost:7070/products/list?page=${this.page - 1}&sort=productId,asc`;
        }else{
          console.log("기본최신순")
          URL = `http://localhost:7070/products/list?page=${this.page - 1}&sort=productId,desc`;
        }
        axios
          .get(URL)
          .then((response) => {
            console.log(response.data);
            this.pro_image = response.data.content;
            this.lengthpage = response.data.totalPages;
            this.totalproduct = response.data.totalElemenets;
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }
    },
  },
};
</script>
