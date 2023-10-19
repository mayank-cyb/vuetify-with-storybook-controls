<template>
  <!--button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button-->
  <!--v-btn type="button" color="primary" @click="onClick" :variant="variant" :size="size">{{
    label
  }}</v-btn-->
  <v-hover v-slot="{ isHovering, props }">
    <v-btn
      color="#2D7FBC"
      :size="size"
      :disabled="disabled"
      variant="flat"
      class="btn-rectangle"
      :class="[
        `${btnClass}--${btnAppearance}`,
        `size-${size}`,
        btnClass,
        btnAppearance,
        { disabled: isDisabled },
        { 'on-hover': isHovering },
      ]"
      @click="onClick(btnClass)"
      v-bind="props"
    >
      {{ label }}
      <template v-if="tooltip.showTooltip">
        <v-tooltip
          :class="[
            `v-tooltip--${tooltip.location}`,
            { 'popover': tooltip.type === 'popOver' },
            { 'popover--without-title': tooltip.type === 'popOver' && !tooltip.hasTitle },
            { 'tooltip': tooltip.type === 'tooltip' },
            { 'popover--with-title': tooltip.type === 'popOver' && tooltip.hasTitle },
          ]"
          activator="parent" 
          :location="tooltip.location"
        >
          <template v-if="tooltip.type === 'popOver'">
            <div class="popover-content">
              <section class="popover-content__title">
                <h2 v-if="tooltip.hasTitle">{{ tooltip.popoverTitle }}</h2>
              </section>
              <section class="popover-content__text">
                <p>{{ tooltip.popoverText }}</p>
              </section>
            </div>

          </template>
          <template v-else>
            {{ label }}
          </template>
        </v-tooltip>
      </template>
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
    tooltip: {
      type: Object,
      validator: function (value) {
        if(value.location) {
          return ["top", "bottom", "start", "end"].indexOf(value) !== -1;
        }
      },
    },
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
        emit("click", btnClass);
      },
    };
  },
};
</script>
