<template>
    <p>{{ props.username }}</p>

</template>
<script setup>
const props = defineProps({
    username: String
})
</script>
<style scoped>
    p {
        text-align: left;
        padding: 5px 15px;
    }
</style>