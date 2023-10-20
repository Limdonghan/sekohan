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
      USER ID
    </div>
    <v-text-field
      v-model="user_id"
      density="compact"
      placeholder="User ID"
      variant="outlined"
      prepend-inner-icon="mdi-account"
      style="width: 280px"
    >
    </v-text-field>
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
    <v-btn type="submit" class="btn-transform" @click="authenticatorCheck"
      >인증번호 확인</v-btn
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
    <v-btn type="submit" class="btn-transform" @click="sendEmail"
      >인증번호 전송</v-btn
    >
    <v-btn
      block
      class="mb-8"
      color="blue"
      size="large"
      variant="tonal"
      @click="find_user_pw"
    >
      continue
    </v-btn>
  </v-card>
</template>
<script>
export default {};
</script>
<style>
.btn-transform {
  width: 100px;
  transform: translate(310px, -60px);
}
</style>
