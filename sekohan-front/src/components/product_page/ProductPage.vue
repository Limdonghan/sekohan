<template>
  <v-row style="margin-top: 15px">
    <v-col cols="12" sm="1"></v-col>
    <v-col cols="12" sm="4" style="background-color: papayawhip">
      <v-carousel
        v-if="ProData.path && ProData.path.length > 0"
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item, index) in ProData.path"
          :key="index"
          :src="getImageUrl(item)"
        ></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="12" sm="6" style="background-color: papayawhip">
      <div class="col-md-7 col-sm-7 col-xs-12" style="height: 400px">
        <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>
        <div class="pl-6">
          <p class="display-1 mb-0" style="font-size: 22px">
            {{ ProData.proName }}
          </p>
          <p class="size" style="font-size: 13px">{{ ProData.nickName }}</p>
          <v-card-actions class="pa-0">
            <p class="headline font-weight-light pt-3" style="font-size: 14px">
              {{ ProData.proPrice }} 円
            </p>
            <v-spacer></v-spacer>
          </v-card-actions>
          <div
            class="subtitle-1 font-weight-thin"
            style="height: 200px; font-size: 17px"
          >
            {{ ProData.proInfo }}
          </div>
          <v-btn
            class="primary white--text"
            outlined
            tile
            dense
            @click="wishadd"
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
                    v-html="item.username"
                  ></v-list-item-title>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="6"> </v-col>
            <v-col style="text-align: right" cols="12" sm="2">
              <v-list-item-time
                style="font-size: small"
                v-html="item.localDateTime"
              ></v-list-item-time>
            </v-col>
          </v-row>
          <v-list-item-subtitle
            style="margin-left: 90px"
            v-html="item.content"
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
        v-model="comment"
      ></v-textarea>
    </v-col>
  </v-row>
  <v-row> </v-row>
  <v-row style="margin-bottom: 10px">
    <v-col cols="12" sm="1"></v-col>
    <v-col cols="12" sm="8" style="background-color: papayawhip"> </v-col>
    <v-col cols="12" sm="2" style="background-color: papayawhip">
      <v-form @submit.prevent="submitcomment">
        <v-btn
          min-width="80%"
          min-height="30"
          color="primary"
          block
          size="large"
          variant="tonal"
          type="submit"
        >
          등록
          <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      comment: "",
      proId: "",
      userId: "",
      ProData: [],
      item: [],
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
  created() {
    this.fetchData();
  },
  methods: {
    timeslectnew() {
      this.item.sort((a, b) => a.commentId - b.commentId);
    },
    wishadd() {
      const formData = new FormData();
      const currentPath = window.location.pathname;
      const pageid = currentPath.split("/").pop();
      formData.append("productId", pageid);
      formData.append("userId", 2);

      axios
        .post(`http://localhost:7070/wish/add`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          window.location.reload();
          console.log("찜 목록 추가 성공", response.data);
        })
        .catch((error) => {
          console.error("알수없는 버그", error);
        });
    },
    submitcomment() {
      const formData = new FormData();
      const currentPath = window.location.pathname;
      const pageid = currentPath.split("/").pop();
      formData.append("content", this.comment);
      formData.append("productId", pageid);
      formData.append("userId", 1);

      axios
        .post(`http://localhost:7070/comment/insert`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("성공", response.data);
          window.location.reload();
        })
        .catch((error) => {
          console.error("업로드실패", error);
        });
    },
    getImageUrl(path) {
      return `http://localhost:7070/images/${path}`;
    },
    fetchData() {
      const currentPath = window.location.pathname;
      const pageid = currentPath.split("/").pop();
      const url = `http://localhost:7070/products/page/${pageid}`;
      const commentsurl = `http://localhost:7070/comment/list/${pageid}`;

      axios
        .get(url)
        .then((response) => {
          this.ProData = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      axios
        .get(commentsurl)
        .then((response) => {
          this.item = response.data;
          this.timeslectnew();
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>
