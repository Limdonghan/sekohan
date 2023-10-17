<template>
  <v-card style="width: 85%; margin: auto">
    <v-data-table
      :headers="headers"
      :items="memberData"
      :search="search"
      :sort-by="[{ key: 'calories', order: 'asc' }]"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              variant="outlined"
              hide-details
              style="width: 50%; margin: auto; font-size: 1.5rem"
            ></v-text-field>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <template v-slot:item.actions=memberData>
        <v-icon size="small" class="me-2" @click="editItem(memberData)">
          mdi-pencil
        </v-icon>
        <v-icon size="small" @click="deleteItem(memberData)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
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
  data: () => ({
    dialog: false,
    memberData: user_data,
    dialogDelete: false,
    selected: [],
    search: "",
    headers: [
      {
        title: "No",
        align: "start",
        sortable: false,
        key: "No",
      },
      { title: "USER_ID", key: "user_id" },
      { title: "USER_PW", key: "pw" },
      { title: "NAME", key: "name" },
      { title: "NICKNAME", key: "nickname" },
      { title: "E-MAIL", key: "email" },
      { title: "REPORT", key: "report" },
      { title: "Actions", key: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {},

    editItem(memberData) {
      this.editedIndex = this.memberData.indexOf(memberData);
      this.editedItem = Object.assign({}, memberData);
      this.dialog = true;
    },

    deleteItem(memberData) {
      this.editedIndex = this.memberData.indexOf(memberData);
      this.editedItem = Object.assign({}, memberData);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.memberData.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.memberData.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
