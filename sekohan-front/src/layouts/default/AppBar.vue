<template>

  <v-app-bar :elevation="0">
    <v-img
      src="@/assets/sekohan_logo.png"
      class="logo"
      width="100px"
      height="auto" 
    />
    <v-btn>    
      <h1>HOME</h1>   
    </v-btn>
    <v-btn>    
      <h1>CATEGORIES</h1>   
    </v-btn>
    <v-btn>    
      <h1>FAQ</h1>   
    </v-btn>
    <v-btn icon>
      <svg-icon type="mdi" :path="mdiAccountpath"></svg-icon>
    </v-btn>
    <v-btn icon>
      <svg-icon type="mdi" :path="mdiCartPath" ></svg-icon>
    </v-btn>

  </v-app-bar>

</template>

<script>
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiAccount } from '@mdi/js';
  import { mdiCartOutline } from '@mdi/js';

export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
       mdiAccountpath: mdiAccount,
       mdiCartPath: mdiCartOutline
    }
  }
}
</script>
<style>
.logo-no-padding img {
  padding: 0;
  margin: 0;
}

</style>
