<template>
  <v-progress-circular
    :color="color"
    class="lsx-spinner"
    :class="`lsx-spinner--${color}`"
    indeterminate
  ></v-progress-circular>
</template>

<script>
export default {
  name: "lsx-spinner",

  props: {
    color: {
      type: String,
      validator: function (value) {
        return (
          [
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
          ].indexOf(value) !== -1
        );
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.v-progress-circular {
  &.lsx-spinner {
    &--primary {
      color: $colorPrimary !important;
    }
    &--secondary {
      color: $colorSecondary !important;
    }
    &--success {
      color: $colorSuccess !important;
    }
    &--warning {
      color: $colorWarning !important;
    }
    &--danger {
      color: $colorDanger !important;
    }
    &--info {
      color: $colorInfo !important;
    }
  }
}

</style>