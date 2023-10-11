<template>
    <v-icon
        end
        :icon="icon"
    ></v-icon>
</template>

<script>
export default {
    props: {
        icon: {
            type: String
        }
    }
}
</script>
