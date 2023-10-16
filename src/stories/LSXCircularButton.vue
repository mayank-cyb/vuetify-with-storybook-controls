<template>
  <!--button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button-->
  <!--v-btn type="button" color="primary" @click="onClick" :variant="variant" :size="size">{{
      label
    }}</v-btn-->
  <v-hover v-slot="{ isHovering, props }">
    <v-btn
      color="#2D7FBC"
      :size="size"
      class="btn-circle"
      :class="[
        `${btnClass}--${btnAppearance}`,
        `btn-circle--size-${size}`,
        btnClass,
        btnAppearance,
        { disabled: isDisabled },
        { 'on-hover': isHovering },
        { 'multi-line': label && (prependIcon || appendIcon || image) },
        { 'icon-only': prependIcon || appendIcon },
        { 'text-only': label && !(prependIcon || appendIcon || image) },
      ]"
      v-bind="props"
      :prepend-icon="prependIcon"
      :append-icon="appendIcon"
    >
      <template v-slot:prepend>
        <v-icon center></v-icon>
      </template>

      <template v-if="image && !label">
        <v-avatar>
          <v-img :src="image" alt="Icon"></v-img>
        </v-avatar>
      </template>
      <template v-else-if="label && image">
        {{ label }}
        <v-avatar>
          <v-img :src="image" alt="Icon"></v-img>
        </v-avatar>
      </template>
      <template v-else>
        {{ label }}
      </template>
      <template v-slot:append>
        <v-icon center></v-icon>
      </template>
    </v-btn>
  </v-hover>
</template>

<script>
//import './button.css';
import "./button.scss";
import { reactive, computed } from "vue";

export default {
  name: "circular-button",
  props: {
    label: {
      type: String,
    },
    size: {
      type: String,
      validator: function (value) {
        return ["small", "large"].indexOf(value) !== -1;
      },
    },
    appearance: {
      type: String,
      default: "default",
      validator: function (value) {
        return ["default", "outline"].indexOf(value) !== -1;
      },
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    btnType: {
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
    prependIcon: {
      type: String,
      default: "",
    },
    appendIcon: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
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
      onClick() {
        emit("click");
      },
    };
  },
};
</script>
