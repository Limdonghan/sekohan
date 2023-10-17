<template>
  <div class="information">
    <p>이미지를 업로드하세요.</p>
    <button @click="$refs.fileRef.click">선택</button>
    <input type="file" @change="selectFile" multiple accept="image/*" ref="fileRef" hidden/>
  </div>
  <div class="images" v-if="files.length > 0">
    <div v-for="fileName in files" :key="fileName" class="image">
      <img :src="`${backendUrl}/image/${fileName}`" alt="이미지">
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      files: []
    }
  },
  computed: {
    backendUrl() {
      return process.env.VUE_APP_BACKEND_URL
    }
  },
  mounted() {
    this.fetchFiles()
  },
  methods: {
    async fetchFiles() {
      const response = await axios.get(`${this.backendUrl}/files`)
      this.files = response.data;
    },
    selectFile(event) {
      const formData = new FormData()
      for (const file of event.target.files) {
        formData.append('files', file)
      }
      axios.post(`${this.backendUrl}/files`, formData, {
        headers: {'Content-Type': 'multipart/form-data'}
      }).then(() => {
        this.fetchFiles()
      }).catch(error => {
        alert(error.message)
      })
    },
  }
}
</script>

<style scoped>
/* styles */
</style>