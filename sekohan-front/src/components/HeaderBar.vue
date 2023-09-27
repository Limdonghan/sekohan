<template>
    <div>
      <ul class="header">
        <li class="logo">
          <v-img width="150" src="@/assets/sekohan_logo.png" />
        </li>
        <li class="nav-item">
          <v-btn flat class="nav-button">
            <h1>HOME</h1>
          </v-btn>
        </li>
        <li class="nav-item">
          <v-btn flat class="nav-button">
            <h1>CATEGORIES</h1>
          </v-btn>
        </li>
        <li class="nav-item">
          <v-btn flat class="nav-button">
            <h1>FAQ</h1>
          </v-btn>
        </li>
        <li class="icon-item-user">
          <v-btn icon flat>
            <svg-icon type="mdi" :path="path"></svg-icon>
          </v-btn>
        </li>
        <li class="icon-item-cart">
          <v-btn icon flat>
            <svg-icon type="mdi" :path="mdiCartOutline"></svg-icon>
          </v-btn>
        </li>
      </ul>
    </div>
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
       path: mdiAccount,mdiCartOutline
    }
  }
}
</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  border-bottom: 1px solid #303030;
}
.header li{
    list-style: none;
}
.logo{
    margin-left: 10%;
}
.nav-bar {
  display: flex;
  justify-content: center; 
  align-items: center; 
}

.nav-item {
  margin: 0 10px; 
}

.icon-item {
  margin-left: 10px;
}
</style>