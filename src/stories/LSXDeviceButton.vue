<template>
    <v-hover v-slot="{ isHovering, props }">
      <v-btn
        color="#2D7FBC"
        :size="size"
        :order-count="orderCount"
        variant="flat"
        class="btn-sqaure btn-square--large"
        :class="[
          `${btnClass}--device`,
          btnClass,
          btnAppearance,
          { 'disabled': isDisabled },
          { 'on-hover': isHovering },
        ]"
        @click="onClick(btnClass)"
        v-bind="props"
      >
        <span class="text-small order-type">{{ label }}</span>
      </v-btn>
    </v-hover>
  </template>
  
  <script>
  //import './button.css';
  import "./button.scss";
  import { reactive, computed } from "vue";
  
  export default {
    name: "my-button",
  
    props: {
      label: {
        type: String,
        required: true,
      },
      orderCount: {
        type: Number,
        required: true,
        default: 0
      },
      btnType: {
        type: String,
        validator: function (value) {
          return (
            ["primary", "secondary", "success", "warning", "danger", "info"].indexOf(
              value
            ) !== -1
          );
        },
      },
    },
  
    emits: ["click"],
  
    setup(props, { emit }) {
      props = reactive(props);
      console.log(props);
      return {
        props,
        // classes: computed(() => ({
        //   'storybook-button': true,
        //   'storybook-button--primary': props.primary,
        //   'storybook-button--secondary': !props.primary,
        //   [`storybook-button--${props.size || 'medium'}`]: true,
        // })),
        btnClass: computed(() => {
          //console.log(props.btnType)
          return props.btnType === "primary"
            ? "btn-primary"
            : props.btnType === "secondary"
            ? "btn-secondary"
            : props.btnType === "success"
            ? "btn-success"
            : props.btnType === "warning"
            ? "btn-warning"
            : props.btnType === "danger"
            ? "btn-danger"
            : props.btnType === "info"
            ? "btn-info"
            : "btn-primary";
        }),
        btnAppearance: computed(() => props.appearance),
        style: computed(() => ({
          backgroundColor: props.backgroundColor,
        })),
        onClick(btnClass) {
          emit('click', btnClass);
        },
      };
    },
  };
  </script>
  