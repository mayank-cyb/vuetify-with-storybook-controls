<template>
    <v-hover
        v-slot="{ isHovering, props }"
    >
        <v-btn
            color="#2D7FBC"
            :size="size"
            variant="flat"
            class="btn-default btn-default--primary"
            :class="{ 'on-hover': isHovering, 'disabled' :  isDisabled }"
            :disabled="isDisabled"
            v-bind="props"
        >
            {{ text }}
        </v-btn>
    </v-hover>
</template>

<script>
    import { ref } from 'vue';
    export default {
        props: {
            text: {
                type: String,
            },
            size: {
                type: String,
            }
        },
        setup(props) {
            const isDisabled = ref(false)
            return {
                isDisabled,
                props
            }
        }
    }
</script>
<style scoped lang="scss">
    @use '@/styles/settings';
    .btn-default {
        &--primary {
            min-width: 5.5rem;
            // height: 2rem;
            // border-radius: 2rem;
          &.on-hover {
            background-color: #2B6590 !important;
          }  
          &.disabled {
            background-color: #8BB5D4 !important;
          }
        }
    }
</style>