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
          <router-link to="/product">
            <v-btn flat class="nav-button" :height="60">
              <h1>product</h1>
            </v-btn>
          </router-link>
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
          <User />
        </td>
        <td>
          <Cart />
        </td>
      </tr>
    </table>
  </header>
</template>
<script>
import Search from "@/components/header_content/Search.vue";
import User from "@/components/header_content/User.vue";
import Cart from "@/components/header_content/Cart.vue";

export default {
  name: "my-component",
  components: {
    Search,
    User,
    Cart
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
