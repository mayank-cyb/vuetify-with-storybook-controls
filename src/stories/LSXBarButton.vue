<template>
    <!--button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button-->
    <!--v-btn type="button" color="primary" @click="onClick" :variant="variant" :size="size">{{
      label
    }}</v-btn-->
    <v-hover v-slot="{ isHovering, props }">
      <v-btn
        color="#2D7FBC"
        :size="size"
        variant="flat"
        class="btn-bar"
        :class="[
          btnClass,
          { 'on-hover': isHovering },
        ]"
        @click="onClick(btnClass)"
        v-bind="props"
      >
        <span>{{ label }}</span>
        <v-avatar>
          <v-img :src="imgPath" alt="Icon"></v-img>
        </v-avatar>
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
      imgPath: {
        type: String,
        default: ''
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
        onClick(btnClass) {
          emit('click', btnClass);
        },
      };
    },
  };
  </script>
  