<template>
  <!-- 로그인 -->
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="400"
      src="@/assets/img/sekohan_logo.png"
    />

    <v-card
      class="mx-auto pa-11 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        User ID
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
        Password
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        variant="outlined"
        prepend-inner-icon="mdi-lock-outline"
        @click:append-inner="visible = !visible"
      >
      </v-text-field>

      <v-card class="mb-12" color="surface-variant" variant="tonal"> </v-card>

      <v-btn block class="mb-8" color="blue" size="large" variant="tonal">
        Log In
      </v-btn>
      <v-card-text class="text-center">
        <router-link to="/signup">
          <v-btn
            class="text-blue text-decoration-none"
            rel="noopener noreferrer"
            target="_blank"
            flat
          >
            Sign UP
          </v-btn>
        </router-link>
        <router-link to="/help">
          <v-btn
            class="text-blue text-decoration-none"
            rel="noopener noreferrer"
            target="_blank"
            flat
          >
            Forgot ID
          </v-btn>
        </router-link>
        <router-link to="/help">
          <v-btn
            class="text-blue text-decoration-none"
            rel="noopener noreferrer"
            target="_blank"
            flat
          >
            Forgot Password
          </v-btn>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
  <br /><br /><br /><br /><br />
</template>
<script>
export default {
  data: () => ({
    visible: false,
  }),
};
</script>
