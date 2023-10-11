<template>
  <v-menu :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-btn icon flat v-bind="props">
        <svg-icon type="mdi" :path="path" />
      </v-btn>
    </template>
    <v-card
      style="
        max-width: 280px;
        max-height: 200px;
        min-width: 270px;
        min-height: 200px;
      "
      v-for="{ avatar, nickname } in useritem"
    >
      <v-row>
        <v-col cols="12" sm="1"></v-col>
        <v-col cols="12" sm="3">
          <a href="http://localhost:3000/mypage">
            <v-img
              style="min-height: 70px; min-width: 70px; margin-top: 10px"
              src="@/assets/1-2.jpg"
            ></v-img>
          </a>
        </v-col>
        <v-col cols="12" sm="7" style="margin-top: 35px"> LOST유저 </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="1"></v-col>
        <v-col cols="12" sm="5" style="align-items: flex-end; margin-top: 20px">
          <v-btn outlined>정보수정</v-btn>
        </v-col>
        <v-col
          cols="12"
          sm="5"
          style="align-items: flex-start; margin-top: 20px"
        >
          <v-btn outlined>로그아웃</v-btn>
        </v-col>
        <v-col cols="12" sm="1"></v-col>
      </v-row>
    </v-card>
  </v-menu>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount } from "@mdi/js";

export default {
  name: "my-component",
  components: {
    SvgIcon,
  },
  data() {
    return {
      useritem: [
        {
          avatar: "@/src/assets/1-1.jpg",
          nickname: "LOST유저",
        },
      ],
      path: mdiAccount,
    };
  },
};
</script>
