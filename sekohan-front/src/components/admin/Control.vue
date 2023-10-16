<template>
    <v-card>
      <v-tabs
        v-model="tab"
        color="deep-purple-accent-4"
        align-tabs="center"
      >
        <v-tab :value="user">USER</v-tab>
        <v-tab :value="pro">PRODUCT</v-tab>
        <v-tab :value="event">EVENT</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item :value="user">
            <ControlMember />
        </v-window-item>
        <v-window-item :value="pro">
            <ControlPro />
        </v-window-item>
        <v-window-item :value="event">
            <ControlEvent />
        </v-window-item>
      </v-window>
    </v-card>
  </template>
  <script>
import ControlEvent from './control/ControlEvent.vue';
import ControlMember from './control/ControlMember.vue';
import ControlPro from './control/ControlPro.vue';

  
    export default {
    data: () => ({
        tab: null,
    }),
    components: { ControlMember, ControlPro, ControlEvent }
}
  </script>