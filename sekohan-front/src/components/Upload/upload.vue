<template>
  <v-container>
    <v-row justify="center">
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
              @click="addSelectedCategory(subSubCategory)">
              {{ subSubCategory.name }}
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
      <v-card> </v-card>
    </v-col>
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3>상품 등록</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitProduct">
              <v-text-field
                v-model="productName"
                label="제목을 입력해 주세요."
              ></v-text-field>
              <v-text-field
                v-model="productPrice"
                label="상품 가격"
                suffix="￥"
                @input="formatPrice"
              ></v-text-field>
              <v-textarea
                v-model="productDescription"
                label="올릴 게시글 내용을 작성해 주세요."
              ></v-textarea>
              <v-btn color="primary" type="submit">등록</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-row>
          <v-col cols="12" sm="3">
            <v-btn
              @click="openFileInput"
              style="
                max-width: 120px;
                min-width: 120px;
                max-height: 120px;
                min-height: 120px;
                margin-left: 25px;
                margin-top: 10px;
              "
              icon="mdi-plus"
            ></v-btn>
            <v-file-input
              ref="fileInput"
              v-if="showFileInput"
              v-model="newFiles"
              label="파일 선택"
              multiple
              accept="image/*"
              @change="onFileChange"
            ></v-file-input>
          </v-col>
          <v-col
            v-for="(file, index) in uploadedFiles"
            :key="index"
            cols="12"
            sm="3"
          >
            <div
              v-if="index === 0"
              style="
                position: fixed;
                z-index: 1;
                font-size: 20px;
                margin-left: 33px;
                color: crimson;
              "
            >
              대표 이미지
            </div>
            <v-img
              :src="file.preview"
              style="
                max-width: 120px;
                min-width: 120px;
                max-height: 120px;
                min-height: 120px;
                margin-left: 25px;
              "
            ></v-img>
            <v-btn @click="deleteFile(index)" style="margin-left: 52px"
              >삭제</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import category from "@/assets/json/category.json";

export default {
  data() {
    return {
      productName: "",
      productDescription: "",
      productPrice: "",
      productImage: null,
      productImagePreview: null,
      newFiles: [],
      showFileInput: false,
      uploadedFiles: [],
      categories: category,
      open: ["Users"],
      selectedCategories: [],
    };
  },
  methods: {
    addSelectedCategory(subSubCategory) {
    this.selectedCategories = []; // 매번 추가될 때마다 배열을 초기화합니다.
    this.selectedCategories.push(subSubCategory);
    console.log('성공', this.selectedCategories);
  },
    submitProduct() {
      const formData = new FormData();
      formData.append("proName", this.productName);
      formData.append("proInfo", this.productDescription);
      formData.append("proPrice", this.productPrice);
      for (let i = 0; i < this.newFiles.length; i++) {
        formData.append("files", this.newFiles[i]);
      }
      this.selectedCategories.forEach((category) => {
        formData.append("categoryId", category.id);
      });
      formData.append("userId", 2);

      axios
        .post("http://localhost:7070/mypage/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log('성공', response.data);
        })
        .catch((error) => {
          console.error('업로드실패', error);
        });

      this.productName = "";
      this.productDescription = "";
      this.productPrice = "";
      this.productImage = null;
      this.productImagePreview = null;
      this.uploadedFiles = [];
      this.selectedCategories = [];
    },
    onFileChange(event) {
      this.productImage = event.target.files[0];
      this.productImagePreview = URL.createObjectURL(this.productImage);
      this.showFileInput = false;
      const newPreviews = this.newFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      this.uploadedFiles.push(...newPreviews);
    },
    clearImage() {
      this.productImage = null;
      this.productImagePreview = null;
    },
    deleteFile(index) {
      URL.revokeObjectURL(this.uploadedFiles[index].preview);
      this.uploadedFiles.splice(index, 1);
    },
    openFileInput() {
      this.showFileInput = true;
      this.$nextTick(() => {
        this.$refs.fileInput.$el.querySelector("input[type=file]").click();
      });
    },
  },
};
</script>