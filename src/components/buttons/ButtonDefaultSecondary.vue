<template>
    <v-hover
        v-slot="{ isHovering, props }"
    >
        <v-btn
            color="#728DA2"
            variant="flat"
            class="btn-default btn-default--secondary"
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
    .btn-default {
        &--secondary {
            min-width: 6.75rem;
          &.on-hover {
            background-color: #4D6B83 !important;
          }  
          &.disabled {
            background-color: #AFBDC8 !important;
          }
        }
    }
</style>