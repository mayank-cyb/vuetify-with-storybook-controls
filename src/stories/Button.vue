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
      :class="[
        `${btnClass}--${btnAppearance}`,
        btnClass,
        btnAppearance,
        { 'on-hover': isHovering },
      ]"
      v-bind="props"
    >
      {{ label }}
    </v-btn>
  </v-hover>
  <p>{{ btnType }}</p>
  <p>{{ btnAppearance }}</p>
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
    // primary: {
    //   type: Boolean,
    //   default: false,
    // },
    size: {
      type: String,
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    appearance: {
      type: String,
      default: "default",
      validator: function (value) {
        return ["default", "outline"].indexOf(value) !== -1;
      },
    },
    btnType: {
      type: String,
      validator: function (value) {
        return (
          ["primary", "secondary", "success", "warning", "danger"].indexOf(
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
          : "btn-primary";
      }),
      btnAppearance: computed(() => props.appearance),
      classes: computed(
        () =>
          //space separated classes
          //console.log(btnType.value);
          btnClass?.value
          // return btnType.value && btnAppearance.value ? `${btnType.value}--${btnAppearance.value}` : '';
          //return 'btn';
      ),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit("click");
      },
    };
  },
};
</script>
