<template>
  <div class="btn-wrapper">
    <button-default-primary 
      :text="'Primary'"
    />
    <button-default-secondary 
      :text="'Secondary'"
    />
  </div>
</template>

<script setup>
  import ButtonDefaultPrimary from '@/components/buttons/ButtonDefaultPrimary.vue';
  import ButtonDefaultSecondary from '@/components/buttons/ButtonDefaultSecondary.vue';
</script>

<style lang="scss">
  .btn-wrapper {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-grow: 1;
  }
</style>
