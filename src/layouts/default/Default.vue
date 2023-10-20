<template>
  <v-app>
    <default-bar />
    <fssd-button 
      showTooltip="true"
    />
    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import FSSDButton from '@/stories/Button.vue';
</script>
