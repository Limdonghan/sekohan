 <template>  
  <div style="margin-left: 15%;
  background-color: aqua;">

    <v-card
      theme="dark"
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
            lg="3"
          >
          <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="mx-auto"
        max-width="300"
        v-bind="props"
      >
        <v-img :src="src"></v-img>

        <v-card-text>
          <v-list-item
                  :title="title"
                  :subtitle="subtitle"
                  class="px-0"
                ></v-list-item>
                <v-list-item
                  :subtitle="price"
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
  
</template>

<script>
  export default {
    data () {
      return {
        page: 1,
      }
    },
    data: () => ({
      cards: [
        {
          title: 'Homemade Dulce de Leche Ice Cream with Chocolate Chips',
          subtitle: 'Happy Foods',
          price: '5000원',
          src: 'https://cdn.vuetifyjs.com/docs/images/graphics/dulce-ice-cream.png',
        },
        {
          title: 'Salted Caramel Swirl Ice Cream',
          subtitle: 'Stone Kitchen',
          src: 'https://cdn.vuetifyjs.com/docs/images/graphics/salted-caramel-ice-cream.png',
          price: '5000원',
        },
        {
          title: 'Peanut Butter No-Churn Ice Cream',
          subtitle: 'The Sweeter Side',
          src: 'https://cdn.vuetifyjs.com/docs/images/graphics/peanut-butter-ice-cream.png',
          price: '5000원',
        },
        {
          title: 'Peanut Butter No-Churn Ice Cream',
          subtitle: 'The Sweeter Side',
          src: 'https://cdn.vuetifyjs.com/docs/images/graphics/peanut-butter-ice-cream.png',
          price: '5000원',
        },
        {
          title: 'Peanut Butter No-Churn Ice Cream',
          subtitle: 'The Sweeter Side',
          src: 'https://cdn.vuetifyjs.com/docs/images/graphics/peanut-butter-ice-cream.png',
          price: '5000원',
        },
        {
          title: 'Peanut Butter No-Churn Ice Cream',
          subtitle: 'The Sweeter Side',
          src: 'https://cdn.vuetifyjs.com/docs/images/graphics/peanut-butter-ice-cream.png',
          price: '5000원',
        },
      ],
      loading: true,
    }),
    

  }
</script>

