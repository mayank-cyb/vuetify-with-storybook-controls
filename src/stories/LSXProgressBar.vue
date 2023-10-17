<template>
    <v-progress-linear
      color="red"
      v-model="valueDeterminate"
    >
    </v-progress-linear>
</template>

<script>
import { ref } from 'vue';
export default {
    props: {
        progress: {
            type: Number,
            default: 0,
            required: true
        }
    },
    setup(props) {
        const valueDeterminate = ref(props.progress)

        return {
            valueDeterminate
        }
    }
}
</script>

<style lang="scss" scoped>
    .v-progress-linear {
        width: 6.25rem;
        background-color: #D2D8E3;
    }
</style>
