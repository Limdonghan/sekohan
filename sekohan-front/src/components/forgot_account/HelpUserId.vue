<template lang="">
  <br />
  <v-card
    class="mx-auto pa-11 pb-8"
    max-width="500"
    rounded="lg"
    elevation="0"
    outlined="false"
  >
    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      NAME
    </div>
    <v-text-field
      v-model="name"
      density="compact"
      placeholder="Name"
      variant="outlined"
      prepend-inner-icon="mdi-badge-account"
      style="width: 280px"
    >
    </v-text-field>

    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      EMAIL
    </div>

    <v-text-field
      v-model="email"
      density="compact"
      placeholder="Email"
      variant="outlined"
      prepend-inner-icon="mdi-email-outline"
      style="width: 280px"
    >
    </v-text-field>
    <v-btn type="submit" class="btn-transform" @click="sendEmail"
      >인증번호 전송</v-btn
    >
    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      AUTHENTICATOR
    </div>
    <v-text-field
      v-model="authenticator"
      color="primary"
      placeholder="authenticator number"
      density="compact"
      variant="outlined"
      style="width: 280px"
      :rules="authenticatorRules"
    ></v-text-field>
    <v-btn type="submit" class="btn-transform" @click="authenticatorCheck"
      >인증번호 확인</v-btn
    >

    <v-btn
      block
      class="mb-8"
      color="blue"
      size="large"
      variant="tonal"
      @click="find_user_id()"
    >
      continue
    </v-btn>
  </v-card>
  <br /><br />
</template>
<script>
import axios from "axios";
import user_profile_sample from "@/assets/json/user_profile_sample.json";

export default {
  data: () => ({
    user_info: user_profile_sample,
    authenticator: "", //사용자가 입력한 인증번호
    name: "", //사용자가 입력한 이름
    email: "", //사용자가 입력한 이메일
  }),
  methods: {
    sendEmail() {
      //인증번호 전송 버튼 메서드
      axios
        .post("http://localhost:8080/api/send-mail/email", this.email, {
          headers: {
            //Message Body에 들어가는 타입을 HTTP Header에 명시
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          //인증번호 전송 성공했을 때
          alert("인증번호 전송 성공", res);
        })
        .catch((error) => {
          //인증번호 전송 실패했을 때
          console.error("에러발생 : ", error);
        });
    },
    authenticatorCheck() {
      //인증번호 체크 버튼 메서드
      axios
        .post("http://localhost:8080/api/send-mail/check", this.authenticator, {
          headers: {
            //Message Body에 들어가는 타입을 HTTP Header에 명시
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          //인증 성공 했을 때
          alert("인증번호 인증 성공", res);
        })
        .catch((error) => {
          //인증 실패 했을 때
          console.error("에러발생 : ", error);
        });
    },

    find_user_id(name) {
      //user_info.name -> 기존 유저 정보
      //this.name -> 새로 입력 받은 정보
      for (var i = 0; i < 1; i++) {
        if (this.name != this.user_info[i].name) {
          return alert("존재하지 않은 아이디입니다.");
        }
      }
      this.$router.push("/help/result");  //존재하는 계정이면 결과창으로 이동
      return false;
    },
  },
};
</script>
<style>
.btn-transform {
  width: 100px;
  transform: translate(310px, -60px);
}
</style>
