<template>
  <v-app>
    <v-row>
      <v-col>
        <h1>Test</h1>
        <v-slider ref="slider" />
        <v-range-slider />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>

  import {VApp, VRow, VCol, VSlider, VRangeSlider} from "vuetify/lib";

  export default {
    components: {
      VApp, VRow, VCol, VSlider, VRangeSlider,
    },
    methods: {
    }
  }
</script>
