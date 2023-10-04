 <template>  
 <v-row>
  <v-col cols="12" sm="2">
    <v-card>
  </v-card>
        </v-col>
        <v-col cols="12" sm="10">
  <div style="margin-left: 3%; margin-top: 3%; margin-bottom: 1%; margin-right: 3%;">
    <v-row dense>
            <v-col style="margin-top: 15px;" cols="12" sm="8">
              전자재품 > 컴퓨터/주변기기 > 노트북
            </v-col>
            <v-col cols="12" sm="2">
              <v-select class="pa-0" v-model="select" :items="options" style="margin-bottom: -20px; margin-right: 10%;" outlined></v-select>
            </v-col>
            <v-col cols="12" sm="2">
              <v-select class="pa-0" v-model="select" :items="options" style="margin-bottom: -20px; margin-right: 10%;" outlined></v-select>
            </v-col>
            
          </v-row>

    <v-card
      theme="white"
      max-width=100%
      rounded="1g"
    >

      <v-container  class="text-center">
        <v-row>
          <v-col
            v-for="{ src, title, subtitle, price } in cards"
            :key="title"
            cols="12"
            md="6"
            lg="2"
          >
          <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="mx-auto"
        min-height="370"
        max-height="370"
        max-width="270"
        v-bind="props"
      >
        <v-img  min-height="245"
        max-height="245" :src="src"></v-img>

        <v-card-text style="position ">
          <v-list-item
                  :title="title"
                  :subtitle="subtitle"
                  class="px-0"
                ></v-list-item>
                <v-list-item
                  :subtitle="price + '원'"
                ></v-list-item>
        </v-card-text>

        <v-overlay
          :model-value="isHovering"
          contained
          scrim="#958648"
          class="align-center justify-center"
        >
          <v-btn href="">상세 보기</v-btn>
        </v-overlay>
      </v-card>
    </v-hover>
          </v-col>
        </v-row>

        <br>

        <v-chip
          size="large"
          variant="text"
        >
          <template v-slot:prepend>
            <v-icon color="disabled"></v-icon>
          </template>

          <div class="text-center">
            <v-pagination 
                v-model="page"
                :length="11"
                :total-visible="6"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
            ></v-pagination>
            </div>
        </v-chip>
      </v-container>
    </v-card>
    
  </div>
</v-col>
</v-row>
</template>

<script>
  export default {
    data () {
      return {
        page: 1,
      }},
    data: () => ({
      
      select:'최신순',
            options: [
                '최신순',
                '가격순',
                '',
            ],
      cards: [
        {
          title: 'Homemade Dulce de Leche Ice Cream with Chocolate Chips',
          subtitle: 'Happy Foods',
          price: '1000',
          src: 'https://cdn.vuetifyjs.com/docs/images/graphics/dulce-ice-cream.png',
        },
        {
          title: 'Salted Caramel Swirl Ice Cream',
          subtitle: 'Stone Kitchen',
          src: 'https://cdn.vuetifyjs.com/docs/images/graphics/salted-caramel-ice-cream.png',
          price: '2000',
        },
        {
          title: 'Peanut Butter No-Churn Ice Cream',
          subtitle: 'The Sweeter Side',
          src: 'https://cdn.vuetifyjs.com/docs/images/graphics/peanut-butter-ice-cream.png',
          price: '3000',
        },
        {
          title: 'Peanut Butter No-Churn Ice Cream',
          subtitle: 'The Sweeter Side',
          src: 'https://cdn.vuetifyjs.com/docs/images/graphics/peanut-butter-ice-cream.png',
          price: '4000',
        },
        {
          title: 'Peanut Butter No-Churn Ice Cream',
          subtitle: 'The Sweeter Side',
          src: 'https://cdn.vuetifyjs.com/docs/images/graphics/peanut-butter-ice-cream.png',
          price: '5000',
        },
        {
          title: 'Peanut Butter No-Churn Ice Cream',
          subtitle: 'The Sweeter Side',
          src: 'src/assets/sekohan_logo.png',
          price: '6000',
        },
        {
          title: 'Peanut Butter No-Churn Ice Cream',
          subtitle: 'The Sweeter Side',
          src: 'https://cdn.vuetifyjs.com/docs/images/graphics/peanut-butter-ice-cream.png',
          price: '7000',
        },
        {
          title: 'Peanut Butter No-Churn Ice Cream',
          subtitle: 'The Sweeter Side',
          src: 'https://cdn.vuetifyjs.com/docs/images/graphics/peanut-butter-ice-cream.png',
          price: '8000',
        },
      ], 
      loading: true,     
    }
    ),
    data1: () => ({
      items: [
        {
          id: 1,
          name: 'Vuetify Human Resources',
          children: [
            {
              id: 2,
              name: 'Core team',
              children: [
                {
                  id: 201,
                  name: 'John',
                },
                {
                  id: 202,
                  name: 'Kael',
                },
                {
                  id: 203,
                  name: 'Nekosaur',
                },
                {
                  id: 204,
                  name: 'Jacek',
                },
                {
                  id: 205,
                  name: 'Andrew',
                },
              ],
            },
            {
              id: 3,
              name: 'Administrators',
              children: [
                {
                  id: 301,
                  name: 'Mike',
                },
                {
                  id: 302,
                  name: 'Hunt',
                },
              ],
            },
            {
              id: 4,
              name: 'Contributors',
              children: [
                {
                  id: 401,
                  name: 'Phlow',
                },
                {
                  id: 402,
                  name: 'Brandon',
                },
                {
                  id: 403,
                  name: 'Sean',
                },
              ],
            },
          ],
        },
      ],
      open: [1, 2],
      search: null,
      caseSensitive: false,
    }),
    computed: {
      filter () {
        return this.caseSensitive
          ? (item, search, textKey) => item[textKey].indexOf(search) > -1
          : undefined
      },
    },
  }
</script>

