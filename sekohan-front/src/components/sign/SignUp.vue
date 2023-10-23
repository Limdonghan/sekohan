<template>
  <!-- 회원가입 -->
  <v-card class="mx-auto" max-width="500" title="SIGN UP">
    <v-container>
      <v-btn flat height="70px">
        <v-img src="@/assets/img/image.png" width="70px" />
      </v-btn>

      <v-text-field
        v-model="user_id"
        color="primary"
        label="ID"
        variant="underlined"
        prepend-inner-icon="mdi-account"
        style="width: 350px"
        :rules="userIdRules"
      />
      <v-btn
        type="submit"
        class="btn-transform"
        @click="checkIdDuplicate"
        text="ID중복체크"
        color="success"
        jstify="start"
      />
      <!-- :rules="[userIdRules, checkDuplicate]"로 변경 -->
      <!-- :rules 스펙에 애초에 rules랑 methods 배열 조합으로 받을 수 있었음-->

      <v-text-field
        v-model="password"
        color="primary"
        label="PASSWORD"
        prepend-inner-icon="mdi-lock-outline"
        variant="underlined"
        :rules="passwordRules"
      />
      <v-text-field
        v-model="password2"
        color="primary"
        label="PASSWORD2"
        prepend-inner-icon="mdi-lock-outline"
        variant="underlined"
        :rules="[passwordRules2, passwordCheck]"
      />

      <v-text-field
        v-model="name"
        color="primary"
        label="NAME"
        prepend-inner-icon="mdi-badge-account"
        variant="underlined"
        :rules="nameRules"
      />

      <v-text-field
        v-model="nickname"
        color="primary"
        label="NICKNAME"
        prepend-inner-icon="mdi-badge-account"
        variant="underlined"
        style="width: 350px"
        :rules="nicknameRules"
      />
      <v-btn
        type="submit"
        class="btn-transform"
        @click="checkNicknameDuplicate"
        text="닉네임 중복체크"
        color="success"
        jstify="start"
      />

      <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        prepend-inner-icon="mdi-email-outline"
        variant="underlined"
        style="width: 350px"
        :rules="emailRules"
      /><v-btn
        type="submit"
        class="btn-transform"
        @click="sendEmail"
        text="인증번호 전송"
        jstify="start"
      />

      <v-text-field
        v-model="authenticator"
        color="primary"
        label="authenticator number"
        variant="underlined"
        style="width: 350px"
        :rules="authenticatorRules"
      />
      <v-btn
        type="submit"
        class="btn-transform"
        @click="authenticatorCheck"
        text="인증번호 확인"
      />

      <v-text-field
        color="primary"
        prepend-inner-icon="mdi-map-marker"
        label="address"
        variant="underlined"
        style="width: 350px"
      />
      <v-btn class="btn-transform" text="주소찾기" />
    </v-container>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        type="submit"
        color="success"
        v-bind:disabled="btn_disabled()"
        @click="signIn"
        style="font-size: large; transform: translateX(110px)"
      >
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
import { reactive } from "vue"; //반응형 데이터 선언
export default {
  data: () => ({
    user_info: user_profile_sample,
    passAuthenticator: "0", //인증번호체크 0:불일치, 1:일치
    passUserIdVaild: "0", //사용자 ID 중복 체크  0:중복, 1:사용가능
    passUserNicknameVaild: "0", //사용자 닉네임 중복 체크 0:중복, 1:사용가능
    user_id: "", //사용자가 입력한 ID
    userIdRules: [
      //ID유효성 체크
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
      //PW유효성 체크
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
    password2: "", //한번 더 입력한 패스워드
    passwordRules2: [
      //PW일치 체크

      (value) => {
        if (value) {
          return true;
        }
        return "PASSWORD를 한번 더 입력해주세요";
      },
    ],
    name: "", //사용자가 입력한 이름
    nameRules: [
      //사용자 이름 유효성체크
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
    nicknameRules: [
      //사용자 닉네임 유효성체크
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
    emailRules: [
      //사용자 이메일 유효성 체크
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
    authenticatorRules: [
      //사용자 이메일 유효성 체크
      (value) => {
        if (value) {
          return true;
        }
        return "인증번호를 입력해주세요";
      },
    ],
  }),
  methods: {
    passwordCheck() {
      //패스워드 일치 여부 확인 메서드
      if (this.password2 == this.password) {
        return true;
      } else {
        return "패스워드가 일치하지 않습니다.";
      }
    },
    sendEmail() {
      //인증번호 전송 버튼 메서드
      axios
        .post("http://localhost:7070/api/send-mail/email", this.email, {
          headers: {
            //Message Body에 들어가는 타입을 HTTP Header에 명시
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          //인증번호 전송 성공했을 때
          alert("인증번호 전송 성공");
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
          this.passAuthenticator = "1";
        })
        .catch((error) => {
          //인증 실패 했을 때
          console.error("에러발생 : ", error);
        });
    },
    checkIdDuplicate() {
      //중복아이디 체크 메서드
      if (this.user_id == "") {
        alert("아이디를 입력해 주세요");
        return false;
      }
      axios
        .post("http://localhost:7070/api/signup/id-check", this.user_id, {
          headers: {
            //Message Body에 들어가는 타입을 HTTP Header에 명시
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          //유효성 검증 성공
          alert("사용 가능한 아이디입니다.");
          this.passUserIdVaild = "1";
        })
        .catch((err) => {
          console.log(err);
          alert("이미 사용중인 아이디 입니다.");
        });
    },
    checkNicknameDuplicate() {
      //중복닉네임 체크 메서드
      if (this.nickname == "") {
        alert("닉네임을 입력해 주세요");
        return false;
      }
      axios
        .post(
          "http://localhost:7070/api/signup/nickname-check",
          this.nickname,
          {
            headers: {
              //Message Body에 들어가는 타입을 HTTP Header에 명시
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          //유효성 검증 성공
          alert("사용 가능한 닉네임입니다.");
          this.passUserNicknameVaild = "1";
        })
        .catch(() => {
          alert("이미 사용중인 닉네임 입니다.");
        });
    },
    btn_disabled() {
      //field의 값이 비어있으면 버튼 비활성화 메소드
      if (this.user_id == "") return true;
      if (this.password == "") return true;
      if (this.password2 == "") return true;
      if (this.name == "") return true;
      if (this.nickname == "") return true;
      if (this.email == "") return true;
      if (this.passUserIdVaild != "1") return true;
      if (this.passUserNicknameVaild != "1") return true;
      //if (this.authenticator == "") return true;
      //if (this.passAuthenticator != "1") return true;
      return false;
    },
    signIn() {
      //회원가입 메서드
      const obj = reactive({
        //reactive :반응형 객체 생성
        user_id: this.user_id,
        password: this.password,
        name: this.name,
        email: this.email,
        nickname: this.nickname,
      });
      axios
        .post("http://localhost:7070/api/signup", JSON.stringify(obj), {
          //JSON.stringify(obj) : 객체를 JSON형태의 문자열로 변환
          headers: {
            //Message Body에 들어가는 타입을 HTTP Header에 명시
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          //회원가입 성공했을 때
          if (res.status === 200) {
            alert("회원가입성공");
            this.$router.push("/signin"); //로그인 페이지로 이동
          }
        })
        .catch((error) => {
          //회원가입 실패했을 때
          console.error("에러발생 : ", error);
        });
    },
  },
};
</script>
<style>
.btn-transform {
  width: 100px;
  float: right;
  transform: translateY(-60px);
}
</style>
