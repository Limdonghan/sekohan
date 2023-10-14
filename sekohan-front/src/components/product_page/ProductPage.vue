<template>
  <v-row style="margin-top: 15px">
    <v-col cols="12" sm="1"></v-col>
    <v-col cols="12" sm="4" style="background-color: papayawhip">
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="12" sm="6" style="background-color: papayawhip">
      <div class="col-md-7 col-sm-7 col-xs-12" style="height: 400px">
        <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>
        <div class="pl-6">
          <p class="display-1 mb-0" style="font-size: 22px">
            맥북 팔아용 급처급처
          </p>
          <p class="size" style="font-size: 13px">판매자</p>
          <v-card-actions class="pa-0">
            <p class="headline font-weight-light pt-3" style="font-size: 14px">
              500,000원
            </p>
            <v-spacer></v-spacer>
          </v-card-actions>
          <div
            class="subtitle-1 font-weight-thin"
            style="height: 200px; font-size: 17px"
          >
            <div>맥북 오늘만 급처가에 팔아요 ㅠㅠ</div>
            <div>010-@@@@-@@@@연락주세요 ㅠㅠ</div>
          </div>
          <v-btn class="primary white--text" outlined tile dense
            ><v-icon>mdi-cart</v-icon>찜목록 추가</v-btn
          >
          <v-btn class="ml-4" outlined tile
            ><v-icon color="error" icon="mdi-alert-circle"></v-icon>개시글
            신고</v-btn
          >
        </div>
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="1"> </v-col>
    <v-col cols="12" sm="10" style="background-color: papayawhip">
      <v-list-item v-for="(item, i) in item" :key="i" inactive="true">
        <v-list-item-content>
          <v-row>
            <v-col cols="12" sm="4">
              <v-row>
                <v-col cols="12" sm="2">
                  <v-list-item-avatar>
                    <v-img
                      style="max-width: 70%; max-height: 70%"
                      :src="item.avatar"
                    ></v-img>
                  </v-list-item-avatar>
                </v-col>
                <v-col cols="12" sm="10">
                  <v-list-item-title
                    style="margin-bottom: 10px"
                    v-html="item.title"
                  ></v-list-item-title>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="6"> </v-col>
            <v-col style="text-align: right" cols="12" sm="2">
              <v-list-item-time
                style="font-size: small"
                v-html="item.time"
              ></v-list-item-time>
            </v-col>
          </v-row>
          <v-list-item-subtitle
            style="margin-left: 90px"
            v-html="item.subtitle"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="1"> </v-col>
    <v-col cols="12" sm="10" style="background-color: papayawhip">
      <v-textarea
        label="댓글입력"
        auto-grow
        variant="outlined"
        rows="3"
        row-height="25"
        shaped
      ></v-textarea>
    </v-col>
  </v-row>
  <v-row> </v-row>
  <v-row style="margin-bottom: 10px">
    <v-col cols="12" sm="1"></v-col>
    <v-col cols="12" sm="8" style="background-color: papayawhip"> </v-col>
    <v-col cols="12" sm="2" style="background-color: papayawhip">
      <v-btn
        min-width="80%"
        min-height="30"
        color="primary"
        block
        size="large"
        variant="tonal"
      >
        등록
        <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      item: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "LOST",
          subtitle: "사용",
          time: "10.09 20:51:00",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "ㅇㅅㅇ",
          subtitle: "삽니당",
          time: "10.09 20:53:48",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "판매자",
          subtitle: "LOST님이랑 대화중이에요",
          time: "10.09 21:01:38",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "ㅇㅅㅇ",
          subtitle: "ㅠㅠ",
          time: "10.09 21:05:54",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "판매자",
          subtitle: "-거래완료-",
          time: "10.09 22:51:31",
        },
      ],
      items: [
        {
          src: "/src/assets/img/1-1.jpg",
        },
        {
          src: "/src/assets/img//1-2.jpg",
        },
      ],
    };
  },
};
</script>
