<template>
  <v-row>
    <v-col cols="12" sm="1"></v-col>
    <v-col cols="12" sm="10">
      <v-card>
        <v-col cols="12" sm="12">
          <v-tabs v-model="tab" bg-color="primary">
            <v-row>
              <v-col cols="12" sm="10">
                <v-tab value="one">판매중</v-tab>
                <v-tab value="two">거래완료</v-tab>
                <v-tab value="three">찜목록</v-tab>
              </v-col>
              <v-col cols="2">
                <v-btn
                  size="small"
                  color="blue"
                  style="margin-top: 9px; max-width: 100%"
                  href="http://localhost:3000/upload"
                  ><v-icon color="yellow" icon="mdi-plus" />상품등록
                </v-btn
                >
              </v-col>
            </v-row>
          </v-tabs>
        </v-col>
        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="one">
              <mysell />
            </v-window-item>
            <v-window-item value="two">
              <ordersold />
            </v-window-item>
            <v-window-item value="three">
              <wishlist />
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import mysell from "@/components/mypage/mysell.vue";
import ordersold from "@/components/mypage/order_soldout.vue";
import wishlist from "@/components/mypage/wish_list.vue";

export default {
  data: () => ({
    model: null,
    tab: null,
  }),
  components: { mysell, ordersold, wishlist },
};
</script>
