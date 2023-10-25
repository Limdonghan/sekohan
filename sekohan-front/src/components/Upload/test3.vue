<template>
  <div>
    <div v-for="image in images" :key="image.proImgId">
      <img :src="getImageUrl(image.path)" alt="Product Image" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      images: []
    };
  },
  mounted() {
    this.fetchImages();
  },
  methods: {
    fetchImages() {
      const url = "http://localhost:7070/products/imagelist"; // 이미지 목록을 반환하는 엔드포인트 URL
      axios.get(url)
        .then(response => {
          this.images = response.data;
        })
        .catch(error => {
          console.error("Error fetching images:", error);
        });
    },
    getImageUrl(path) {
      return `http://localhost:7070/images/${path}`; // 이미지 파일이 호스팅되는 경로에 따라 URL을 구성합니다
    }
  }
};
</script>