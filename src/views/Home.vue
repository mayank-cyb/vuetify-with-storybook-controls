<template>
  <div class="btn-wrapper">
    <hello-world/>
    <lsx-circular-button
      btnType="primary"
      size="large"
      :isDisabled="false"
      class="icon-only"
      prependIcon=""
      appendIcon=""
      image="src/assets/Top-Nav-Bell.svg"
    />
  </div>
</template>

<script setup>
  import LSXCircularButton from '@/stories/LSXCircularButton.vue';
  import HelloWorld from '@/components/HelloWorld.vue';

</script>

<style lang="scss">
  .btn-wrapper {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-grow: 1;
  }
</style>
