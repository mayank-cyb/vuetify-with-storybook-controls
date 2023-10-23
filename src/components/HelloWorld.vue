<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-img height="300" src="@/assets/logo.svg" />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Vuetify</h1>

      <div class="py-14" />
      <Button 
        :showTooltip="true"
        v-bind="tooltip"
        label="button"
      />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="https://vuetifyjs.com/components/all/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-view-dashboard"
              size="large"
              start
            />

            Components
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Get Started
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="https://community.vuetifyjs.com/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-account-group"
              size="large"
              start
            />

            Community
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <Button 
            :showTooltip="true"
            v-bind="tooltip"
            label="button"
          />
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import Button from '@/stories/Button.vue';
import { ref } from 'vue';
export default {
  components: {
    Button
  },
  setup() {
    const tooltip = ref({
      location : "bottom",
      label : "Tooltip",
      tooltipType : "popover",
      hasTitle : true,
      popoverTitle : "Popover title",
      popoverText : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    });
    return {
      tooltip
    }
  }
}

  //
</script>
