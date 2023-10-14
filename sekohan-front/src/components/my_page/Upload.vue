<template>
    <v-app>
      <v-container fluid style="width: 600px">
        <div class="mb-5">
          <h1>bezkoder.com</h1>
          <h2>Vuetify File Upload</h2>
        </div>
  
        <UploadFiles/>
      </v-container>
    </v-app>
  </template>
  
  <script>
  import UploadFiles from "@/components/mypage/uploadfile.vue";
  
  export default {
    name: "upload",
    components: {
      UploadFiles,
    },
  };
  </script>