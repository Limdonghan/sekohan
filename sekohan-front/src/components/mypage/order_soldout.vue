<template>
    <v-row>
        <v-col
          v-for="{ src, title, subtitle, price, url } in cards"
          :key="title"
          cols="12"
          md="6"
          lg="6"
        >
    <v-card
      class="mx-auto"
      min-height="200"
      max-height="200"
      max-width="800"
      v-bind="props"
    >
    <v-row>
      <v-col cols="12" sm="4" >
      <v-img   min-height="180" 
      max-height="180" style="margin-top:10px;" :src="src" ></v-img>
    </v-col>
    <v-col cols="12" sm="5">
      <v-card-text style="position ">
        <v-list-item
                :title="title"
                :subtitle="subtitle"
                :href="url"
                class="px-0"
              ></v-list-item>
              <v-list-item
                :subtitle="price + '원'"
              ></v-list-item>
      </v-card-text>
    </v-col>
    <v-col cols="12" sm="3" style="align=right; ">
              <v-btn disabled size="small" color="black" style="margin-top:150px; ali" >판매 완료</v-btn>
          </v-col>
    </v-row>
    </v-card>
        </v-col>
      </v-row>
      <div class="text-center">
          <v-pagination 
              v-model="page"
              :length="11"
              :total-visible="6"
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
          ></v-pagination>
          </div>
        </template>
    
    <script>
    export default {
      data () {
        return {
          page: 1,
        }},
      data: () => ({
        cards: [
          {
            title: '초코칩 팔아요',
            subtitle: 'My nickname',
            price: '1000',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/dulce-ice-cream.png',
            url: '/product/page'
          },
          {
            title: 'Salted Caramel Swirl Ice Cream',
            subtitle: 'My nickname',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/salted-caramel-ice-cream.png',
            price: '2000',
          },
          {
            title: 'Peanut Butter No-Churn Ice Cream',
            subtitle: 'My nickname',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/peanut-butter-ice-cream.png',
            price: '3000',
          },
          {
            title: 'Peanut Butter No-Churn Ice Cream',
            subtitle: 'My nickname',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/peanut-butter-ice-cream.png',
            price: '4000',
          },
        ],
        tab: null,
      }),
    }
    </script>