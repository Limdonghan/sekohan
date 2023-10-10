<template>
  <v-row style="margin-bottom: 10px;">
    <v-col cols="12" sm="1"></v-col>
    <v-col cols="12" sm="10">
      <div>
        <div class="text-subtitle-2 mb-2">자주 묻는 질문</div>
        <v-expansion-panels>
          <v-expansion-panel
          v-for="{title, subtitle} in info"
            :key="i"
            :title="title"
            :text="subtitle"
          ></v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-col>
    <v-col cols="12" sm="1"></v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    info: [
      {
        title: "[분쟁해결절차] 사기꾼의 주요 사기패턴 유형이 궁금해요.",
        subtitle: "#최근 빈번하게 발생하는 사기유형★아래의 계좌유형(가상계좌)의 경우 사기 가능성이 높아 입금유도 시 주의가 필요합니다! 카카오뱅크 3355 로 시작하는 계좌 신한은행 562 또는 270으로 시작하는 계좌케이뱅크 7001로 시작하는 계좌",
      },
      {
        title: "거래를 하면 안 되는 것들은 어떤 것이 있나요?",
        subtitle: "My nickname",
      },
      {
        title: "[분쟁해결절차] 사기를 당하면 어떻게 처리해야 되나요?",
        subtitle: "My nickname",
      },
      {
        title: "[분쟁해결절차] 배송완료 되었는데, 구매자가 구매확정을 누르지 않아요.",
        subtitle: "My nickname",
      },
    ],
    tab: null,
  }),
};
</script>
