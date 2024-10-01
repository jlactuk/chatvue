<template>
    <article>
        <p class="author">{{ props.messageData.username }}</p>
        <p class="text">{{ props.messageData.text }}</p>
        <p class="time">{{ formattedDate }}</p>
    </article>
    
</template>
<script setup>
    const props = defineProps({messageData : Object})
    let formattedDate = props.messageData.date.getHours() + ':' + props.messageData.date.getMinutes();
</script>

<style scoped>
    article {
        background: #fff;;
        box-shadow: 0 3px 5px #0008;
        width: 80%;
        position: relative;
        padding: 20px;
        box-sizing: border-box;
        align-self: start;
        border-radius: 2px;
        display: grid;
        grid-template-rows: 20px 1fr;
    }
    p {
        margin: 0;
        padding: 0;
    }
    .author,
    .text {
        text-align: left;
    }
    .text {
        border-top: 1px solid #ccc;
        height: 100%;
        padding: 10px 5px;
    }
    .time {
        position: absolute;
        bottom: 0;
        right: 20px;
    }
    .self {
        background: #ccc;
 
        align-self: end;
    }
    .self > .text {
        border-top: 1px solid #FFF;
    }

</style>