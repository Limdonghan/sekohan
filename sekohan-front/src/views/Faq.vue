<template>
  <v-row style="margin-bottom: 10px">
    <v-col cols="12" sm="1"></v-col>
    <v-col cols="12" sm="10">
      <div>
        <div class="text-subtitle-2 mb-2">자주 묻는 질문</div>
        <v-expansion-panels>
          <v-expansion-panel
              v-for="i in data"
            :key="i"
            :title= i.title
            :text= i.subtitle
          >
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-col>
    <v-col cols="12" sm="1"></v-col>
  </v-row>
</template>

<script>
import faqData from "@/assets/json/faq_sample.json"
export default {
  name: "Faq",
  data() {
    return {
      data: faqData,

    };
  },
};
</script>
