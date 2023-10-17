<template>
  <v-card>
    <v-card-title style="width: 70%; margin: auto">
    <v-text-field
        :model-value="itemsPerPage"
        class="pa-2"
        label="최대 갯수"
        variant="outlined"
        type="number"
        min="-1"
        max="15"
        hide-details
        @update:model-value="itemsPerPage = parseInt($event, 10)"
        style="width: 20%; float: left;"
      ></v-text-field>
    
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        variant="outlined"
        hide-details
        style="width: 80%; margin-top: 8px; font-size: 1.5rem;"
      ></v-text-field>
      
    </v-card-title>

    <v-data-table
      style="width: 1500px; margin: auto;"
      v-model:page="page"
      :headers="headers"
      :items="data2"
      :items-per-page="itemsPerPage"
      hide-default-footer
      item-value="name"
      :search="search"
      show-select
      class="elevation-1"
    >
      <template v-slot:bottom>
        <div class="text-center pt-2">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
import user_data from "@/assets/json/user_profile_sample.json";
import { VDataTable } from "vuetify/labs/VDataTable";

export default {
  components: {
    VDataTable,
  },
  data() {
    return {
      page: 1,
      data2: user_data,
      search: "",
      locations: ["user_id", "user_name", "report"],
      location: "검색기준",
      itemsPerPage: 10,
      selected: [],
      headers: [
        {
          align: "start",
          sortable: false,
          title: "No.",
          key: 1,
        },
        { title: "USER_ID", key: "user_id" },
        { title: "USER_PW", key: "pw" },
        { title: "NAME", key: "name" },
        { title: "NICKNAME", key: "nickname" },
        { title: "E-MAIL", key: "email" },
        { title: "REPORT", key: "report" },
      ],
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.data2.length / this.itemsPerPage);
    },
  },
};
</script>
<style>
table {
  margin: 0 auto;
  padding: 0;
}
.v-data-table-header__content{
    font-size: 1.5rem;
}
.v-data-table__td{
    font-size: 1.2rem;
}

</style>
