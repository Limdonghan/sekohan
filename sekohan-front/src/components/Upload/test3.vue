<template>
  <v-container>
    <v-row justify="center">
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
          <v-col cols="12" sm="4">
            <v-btn @click="openFileInput">이미지 선택</v-btn>
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
            sm="4"
          >
            <div v-if="index === 0" style="position: fixed">매인이미지</div>
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
            <v-btn @click="deleteFile(index)">삭제</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
    };
  },
  methods: {
    submitProduct() {
      const hasUploadedFiles = this.uploadedFiles.length > 0;
      if (hasUploadedFiles) {
        this.uploadedFiles = [];
      }
      console.log("등록된 상품: ", {
        name: this.productName,
        description: this.productDescription,
        price: this.productPrice,
        image: this.productImage,
      });

      this.productName = "";
      this.productDescription = "";
      this.productPrice = "";
      this.productImage = null;
      this.productImagePreview = null;
      this.uploadedFiles = null;
    },
    onFileChanged(event) {
      this.productImage = event.target.files[0];
      this.productImagePreview = URL.createObjectURL(this.productImage);
    },
    clearImage() {
      this.productImage = null;
      this.productImagePreview = null;
    },
    onFileChange() {
      this.showFileInput = false;
      const newPreviews = this.newFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      this.uploadedFiles.push(...newPreviews);
    },
    deleteFile(index) {
      URL.revokeObjectURL(this.uploadedFiles[index].preview);
      this.uploadedFiles.splice(index, 1);
    },
    formatPrice() {
      this.productPrice = this.productPrice
        .replace(/[^\d.]/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
