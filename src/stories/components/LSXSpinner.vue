<template>
    <v-progress-circular color="primary" indeterminate></v-progress-circular>
</template>


<script>
//import './button.css';
import "./button.scss";
import { reactive, computed } from "vue";

export default {
  name: "lsx-spinner",

  props: {
    color: {
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
}
</script>