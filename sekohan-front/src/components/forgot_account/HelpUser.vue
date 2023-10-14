<template>
  <v-card class="help_card" style="width : 600px;">
    <v-tabs fixed-tabs  v-model="tab" color="deep-purple-accent-4" align-tabs="center" >
      <v-tab value="one"> ID찾기 </v-tab>
      <v-tab value="two"> PW찾기 </v-tab>
    </v-tabs>
    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one"> <HelpUserIdVue /> </v-window-item>
        <v-window-item value="two"> <HelpUserPwVue/> </v-window-item>
      </v-window>

    </v-card-text>
  </v-card>
</template>
<script>
  import HelpUserIdVue from './HelpUserId.vue';
  import HelpUserPwVue from './HelpUserPw.vue';
  export default {
    data: () => ({
      model: null,
      tab: null,
    }),
    components:{HelpUserIdVue, HelpUserPwVue}
  }
</script>
<style>
.help_card{
  margin: 0 auto;
}
</style>