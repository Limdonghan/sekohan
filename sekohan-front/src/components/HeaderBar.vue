<template>
    <header>
        <table>
            <tr>
                <td style="width: 35%;">
                    <v-btn :height="60" flat> 
                      <v-img width="160" src="@/assets/sekohan_logo.png" /> 
                    </v-btn>
                </td>
                <td style="width: 10%;">
                  <v-btn flat class="nav-button" :height="60">
                   <h1>HOME</h1>
                  </v-btn>
                </td>
                <td style="width: 10%;">
                  <v-btn flat class="nav-button" :height="60">
                    <h1>CATEGORIES</h1>
                  </v-btn>
                </td>
                <td style="width: 34%;">
                  <v-btn flat class="nav-button" :height="60">
                    <h1>FAQ</h1>
                  </v-btn>
                </td>
                <td>
                  <v-btn icon flat>
                    <svg-icon type="mdi" :path="mdiTabSearch">
                    </svg-icon>
                  </v-btn>
                </td>
                <td>
                  <v-btn icon flat>
                    <svg-icon type="mdi" :path="path" />
                  </v-btn>
                </td>
                <td>
                  <v-btn icon flat>
                    <svg-icon type="mdi" :path="mdiCartOutline" />
                  </v-btn>
                </td>
            </tr>
        </table>
    </header>
  </template>
<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js';
import { mdiCartOutline } from '@mdi/js';
import { mdiTabSearch } from '@mdi/js';



export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
       path: mdiAccount,mdiCartOutline,mdiTabSearch
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