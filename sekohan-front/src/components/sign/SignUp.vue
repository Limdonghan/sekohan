<template>
  <!-- 회원가입 -->
  <v-card class="mx-auto" max-width="500" title="SIGN UP">
    <v-container>
      <v-form>
        <v-img src="@/assets/img/image.png" width="100px" />
        <v-btn type="submit" class="btn-transform">사진 등록</v-btn>
      </v-form>
      <v-form @submit.prevent>
        <v-text-field
          v-model="user_id"
          color="primary"
          label="ID"
          variant="underlined"
          prepend-inner-icon="mdi-account"
          :rules="[userIdRules, checkDuplicate]"
        >
          <!-- :rules="[userIdRules, checkDuplicate]"로 변경 -->
          <!-- :rules 스펙에 애초에 rules랑 methods 배열 조합으로 받을 수 있었음-->
        </v-text-field>
      </v-form>
      <v-form @submit.prevent>
        <v-text-field
          v-model="password"
          color="primary"
          label="PASSWORD"
          prepend-inner-icon="mdi-lock-outline"
          variant="underlined"
          :rules="passwordRules"
        ></v-text-field>
      </v-form>
      <v-form @submit.prevent>
        <v-text-field
          v-model="name"
          color="primary"
          label="NAME"
          prepend-inner-icon="mdi-badge-account"
          variant="underlined"
          :rules="nameRules"
        ></v-text-field>
      </v-form>
      <v-form @submit.prevent>
        <v-text-field
          v-model="nickname"
          color="primary"
          label="NICKNAME"
          prepend-inner-icon="mdi-badge-account"
          variant="underlined"
          :rules="nicknameRules"
        ></v-text-field>
      </v-form>

        <v-text-field
          v-model="email"
          color="primary"
          label="Email"
          prepend-inner-icon="mdi-email-outline"
          variant="underlined"
          style="width: 350px"
          :rules="emailRules"
        ></v-text-field
        ><v-btn type="submit" class="btn-transform" @click="sendEmail"
          >인증번호 전송</v-btn
        >


        <v-text-field
          v-model="authenticator"
          color="primary"
          label="authenticator number"
          variant="underlined"
          :rules="authenticatorRules"
        ></v-text-field>
        <v-btn type="submit" class="btn-transform" @click="authenticatorCheck"
          >인증번호 확인</v-btn
        >

      <v-form @submit.prevent>
        <v-text-field
          v-model="address"
          color="primary"
          prepend-inner-icon="mdi-map-marker"
          label="address"
          variant="underlined"
          style="width: 350px"
          :rules="addressRules"
        ></v-text-field>
        <v-btn class="btn-transform">주소찾기</v-btn>
      </v-form>
      <v-checkbox
        v-model="terms"
        color="secondary"
        label="I agree to site terms and conditions"
      ></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn type="submit" color="success">
        회원가입하기

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  <br />
  <br />
  <br />
</template>
<script>
import axios from "axios";
import user_profile_sample from "@/assets/json/user_profile_sample.json";
export default {
  data: () => ({
    authenticator: "", //사용자가 입력한 인증번호
    user_info: user_profile_sample,
    user_id: "", //사용자가 입력한 ID
    // 사용자 ID 유효성 체크
    userIdRules: [   
      (value) => {
        if (value) {
          return true;
        }
        return "ID를 입력해주세요";
      },
      (value) => {
        if (/^[a-zA-Z0-9]*$/.test(value)) {
          return true;
        }
        return "아이디는 영문+숫자만 입력 가능합니다.";
      },

      (value) => {
        if (!(value && value.length >= 15)) {
          return true;
        }
        return "아이디는 15자 이상 입력할 수 없습니다.";
      },
    ],
    password: "", //사용자가 입력한 PW
    passwordRules: [
      (value) => {
        if (value) {
          return true;
        }
        return "PASSWORD를 입력해주세요";
      },
      (value) => {
        if (!(value && value.length >= 30)) {
          return true;
        }
        return "패스워드는 30자 이상 입력할 수 없습니다.";
      },
    ],
    name: "", //사용자가 입력한 이름
    //사용자 이름 유효성체크
    nameRules: [
      (value) => {
        if (value) {
          return true;
        }
        return "이름을 입력해주세요.";
      },
      (value) => {
        if (!(value && value.length >= 30)) {
          return true;
        }
        return "이름은 30자 이상 입력할 수 없습니다.";
      },
      (value) => {
        if (!/[~!@#$%^&*()_+|<>?:{}]/.test(value)) {
          return true;
        }
        return "이름에는 특수문자를 사용할 수 없습니다.";
      },
    ],
    nickname: "", //사용자가 입력한 닉네임
    //사용자 닉네임 유효성체크
    nicknameRules: [
      (value) => {
        if (value) {
          return true;
        }
        return "닉네임를 입력해주세요";
      },
      (value) => {
        if (!(value && value.length >= 30)) {
          return true;
        }
        return "닉네임은 30자 이상 입력할 수 없습니다.";
      },
      (value) => {
        if (!/[~!@#$%^&*()_+|<>?:{}]/.test(value)) {
          return true;
        }
        return "닉네임에는 특수문자를 사용할 수 없습니다.";
      },
    ],
    email: "", //사용자가 입력한 이메일
    //사용자 이메일 유효성 체크
    emailRules: [
      (value) => {
        if (value) {
          return true;
        }
        return "이메일 입력해주세요";
      },
      (value) => {
        if (
          !value ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
        ) {
          return true;
        }
        return "이메일 형식대로 입력해주세요";
      },
    ],
    authenticator: "", //사용자가 입력한 인증번호
    //사용자 이메일 유효성 체크
    authenticatorRules: [
      (value) => {
        if (value) {
          return true;
        }
        return "인증번호를 입력해주세요";
      },
    ],
  }),
  methods: {
    sendEmail(){ //인증번호 전송 버튼 메서드
      axios.post('http://localhost:8080/api/send-mail/email',this.email,{
        headers: {  //Message Body에 들어가는 타입을 HTTP Header에 명시
          'Content-Type' : 'application/json'
        }
      })
      .then(res => {  //인증번호 전송 성공했을 때
        alert("인증번호 전송 성공",res)
      })
      .catch(error => {  //인증번호 전송 실패했을 때
        console.error('에러발생 : ',error);
      });
    },
    authenticatorCheck(){  //인증번호 체크 버튼 메서드
      axios.post('http://localhost:8080/api/send-mail/check',this.authenticator,{
        headers: { //Message Body에 들어가는 타입을 HTTP Header에 명시
          'Content-Type' : 'application/json'
        }
      })
      .then(res => {  //인증 성공 했을 때
        alert("인증번호 인증 성공", res)
      })
      .catch(error => { //인증 실패 했을 때
        console.error('에러발생 : ',error)
      })
    },



    checkDuplicate(user_id) {
      // user_info -> 기존 유저 정보
      // user_id -> 새로 입력 받은 정보
      for (var i = 0; i < 1; i++) {
        if (user_id == this.user_info[i].user_id) {
          return "이미 사용중인 아이디입니다.";
        }
      }
      return true;
    },
  },
};
</script>
<style>
.btn-transform {
  width: 100px;
  transform: translate(370px, -60px);
}
</style>
