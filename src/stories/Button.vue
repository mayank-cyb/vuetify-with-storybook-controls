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
      <template v-if="showTooltip && isHovering">
        <FSSDTooltip 
          activator="parent"
          :location ="tooltip.location"
          :label="tooltip.label"
          :tooltipType="tooltip.tooltipType"
          :hasTitle="tooltip.hasTitle"
          :popoverTitle="tooltip.popoverTitle"
          :popoverText="tooltip.popoverText"
        />
      </template>
    </v-btn>
  </v-hover>
</template>

<script>
//import './button.css';
import "./button.scss";
import { reactive, computed } from "vue";
import FSSDTooltip from "./FSSDTooltip.vue";

export default {
  name: "my-button",
  components: {
    FSSDTooltip,
},
  props: {
    label: {
      type: String,
      default: "Button",
      required: true,
    },
    size: {
      type: String,
      default: "large",
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
      default: "primary",
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
    showTooltip: {
      type: Boolean,
      default: true,
    },
    tooltip: {
      type: Object,
      default: () => ({
        location: "bottom",
        tooltipType: "tooltip"
      }),
      validator: function (value) {
        if(value.location) {
          return ["top", "bottom", "start", "end"].indexOf(value.location) !== -1;
        }
        else if (value.tooltipType) {
          return ["tooltip", "popover"].indexOf(value.tooltipType) !== -1;
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
