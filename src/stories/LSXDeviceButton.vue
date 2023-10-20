<template>
    <v-hover v-slot="{ isHovering, props }">
      <v-btn
        color="#2D7FBC"
        :size="size"
        :order-count="orderCount"
        variant="flat"
        class="btn-sqaure btn-square--large btn-device"
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
        <v-avatar>
          <v-img :src="image" alt="Icon"></v-img>
        </v-avatar>
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
      image: {
        type: String,
      }
    },
  
    emits: ["click"],
  
    setup(props, { emit }) {
      props = reactive(props);
      console.log(props);
      return {
        props,
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
  