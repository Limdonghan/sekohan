<template>
  <header>
    <table>
      <tr>
        <td style="width: 35%">
          <router-link to="/">
            <v-btn :height="60" flat>
              <v-img width="160" src="@/assets/sekohan_logo.png" />
            </v-btn>
          </router-link>
        </td>
        <td style="width: 10%">
          <router-link to="/">
            <v-btn flat class="nav-button" :height="60">
              <h1>HOME</h1>
            </v-btn>
          </router-link>
        </td>
        <td style="width: 10%">
          <RouterLink to="/product">
            <v-btn flat class="nav-button" :height="60">
              <h1>product</h1>
            </v-btn>
          </RouterLink>
        </td>
        <td style="width: 30%">
          <router-link to="/faq">
            <v-btn flat class="nav-button" :height="60">
              <h1>FAQ</h1>
            </v-btn>
          </router-link>
        </td>
        <td style="width: 5%">
          <Search />
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
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount } from "@mdi/js";
import { mdiCartOutline } from "@mdi/js";
import { mdiTabSearch } from "@mdi/js";
import Search from "./Search.vue";

export default {
  name: "my-component",
  components: {
    SvgIcon,
    Search,
  },
  data() {
    return {
      path: mdiAccount,
      mdiCartOutline,
      mdiTabSearch,
    };
  },
};
</script>

<style>
header {
  padding: 30px;
}

header table {
  width: 100%;
  margin: 0 auto;
  padding: 0;
}
</style>
