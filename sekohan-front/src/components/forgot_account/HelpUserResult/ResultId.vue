<template>
  <v-card class="help_card" style="width: 600px">
    <v-card-text
      v-for="i in user_info.slice(0, 1)"
      :key="i"
      style="margin: auto; font-size: xx-large; width: max-content"
    >
      {{ i.name }}님의 ID찾기 결과입니다.
      
    </v-card-text>
    <v-divider></v-divider>      <!--선긋기-->
    <v-card-text
      v-for="i in user_info.slice(0, 1)"
      :key="i"
      style="margin: auto; font-size: xx-large; width: max-content"
    >
      {{ i.user_id }}입니다
      
    </v-card-text>
  </v-card>
</template>
<script>
import user_profile_sample from "@/assets/json/user_profile_sample.json";
export default {
  data: () => ({
    user_info: user_profile_sample,
  }),
};
</script>
<style>
.help_card {
  margin: 0 auto;
}
</style>
