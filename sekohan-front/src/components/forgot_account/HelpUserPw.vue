<template lang="">
  <br />
  <v-card
    class="mx-auto pa-11 pb-8"
    max-width="448"
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
      density="compact"
      placeholder="User ID"
      variant="outlined"
      prepend-inner-icon="mdi-account"
    >
    </v-text-field>
    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      NAME
    </div>
    <v-text-field
      density="compact"
      placeholder="Name"
      variant="outlined"
      prepend-inner-icon="mdi-badge-account"
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
    >
    </v-text-field>
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
      :rules="authenticatorRules"
    ></v-text-field>
    <v-btn
      block
      class="mb-8"
      color="blue"
      size="large"
      variant="tonal"
      @click="find_id"
    >
      continue
    </v-btn>
  </v-card>
</template>
<script>
export default {};
</script>
<style lang=""></style>
