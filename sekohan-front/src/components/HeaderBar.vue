<template>
    <header>
        <table>
            <tr>
                <td style="width: 35%;"><v-img width="150" src="@/assets/sekohan_logo.png" /></td>
                <td style="width: 10%;"><v-btn flat class="nav-button">
            <h1>HOME</h1>
          </v-btn></td>
                <td style="width: 10%;"><v-btn flat class="nav-button"  href="http://localhost:3000/product">
            <h1>product</h1>
          </v-btn></td>
                <td style="width: 34%;"><v-btn flat class="nav-button">
            <h1>FAQ</h1>
          </v-btn></td>
                <td align="right"><v-btn icon flat>
            <svg-icon type="mdi" :path="path"></svg-icon>
          </v-btn></td>
                <td align="right"><v-btn icon flat>
            <svg-icon type="mdi" :path="mdiCartOutline"></svg-icon>
          </v-btn></td>
            </tr>
        </table>
    </header>
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
header {
    padding: 30px;
    border-bottom: 1px solid #303030;
}

header table {
    width: 100%;
    margin: 0 auto;
    padding: 0;
}
</style>