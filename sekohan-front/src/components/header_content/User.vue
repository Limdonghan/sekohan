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
      v-for="user in data.slice(0,1)" :key="user"
    >
      <v-row>
        <v-col cols="12" sm="1"></v-col>
        <v-col cols="12" sm="3">
          <router-link to="/mypage">
            <v-btn style="margin-top: 20px;" flat>
              <v-img width="30" src="@/assets/img/1-2.jpg" />
            </v-btn>
          </router-link>
        </v-col>
        <v-col cols="12" sm="7" style="margin-top: 35px"> {{user.nickname}} </v-col>
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
import user_profile_sample from "@/assets/json/user_profile_sample.json";

export default {
  name: "my-component",
  components: {
    SvgIcon,
  },
  data() {
    return {
      data: user_profile_sample,
      path: mdiAccount,
    };
  },
};
</script>
