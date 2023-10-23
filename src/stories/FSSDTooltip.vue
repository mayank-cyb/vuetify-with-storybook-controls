<template>
    <v-tooltip
          :class="[
            `v-tooltip--${location}`,
            { 'popover': tooltipType === 'popover' },
            { 'popover--without-title': tooltipType === 'popover' && hasTitle },
            { 'tooltip': tooltipType === 'tooltip' },
            { 'popover--with-title': tooltipType === 'popover' && hasTitle },
          ]"
          :location="location"
          activator="parent"
        >
          <template v-if="tooltipType === 'popover'">
            <div class="popover-content">
              <section class="popover-content__title">
                <h2 v-if="hasTitle">{{ popoverTitle }}</h2>
              </section>
              <section class="popover-content__text">
                <p>{{ popoverText }}</p>
              </section>
            </div>

          </template>
          <template v-else>
            {{ label }}
          </template>
        </v-tooltip>
</template>

<script>
    export default {
        component: 'FSSDTooltip',
        props: {
            // tooltip: {
            // type: Object,
            //     validator: function (value) {
            //         if(value.location) {
            //             return ["top", "bottom", "start", "end"].indexOf(value) !== -1;
            //         }
            //     },
            // },
        // activator: {
        //   type: String,
        //   default: "parent"
        // },
        location: {
            type: String,
            default: "top",
            validator: function (value) {
            if(value) {
                    return ["top", "bottom", "start", "end"].indexOf(value) !== -1;
                }
            },
        },
        label: {
            type: String,
            default: "Tooltip"
        },
        tooltipType: {
            type: String,
            default: "tooltip"
        },
        hasTitle: {
            type: Boolean,
            default: true
        },
        popoverTitle: {
            type: String,
            default: "Popover title"
        },
        popoverText: {
            type: String,
            default: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    },
}
</script>