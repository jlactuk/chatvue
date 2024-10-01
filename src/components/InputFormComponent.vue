<template>
    <article>
        <input type="text" v-model="messageData" @keypress.enter.ctrl="SendMessage">
        <button @click="SendMessage">Send message</button>
    </article>
</template>

<script setup>
import {ref} from 'vue'
    const emit = defineEmits(['sendMessage']);
    const messageData = ref('')
    function SendMessage() {
        emit('sendMessage', messageData.value.trim());
        messageData.value = '';
    }
</script>

<style scoped>
article {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
}
    input {
        width: 80%;
        padding: 15px 10px;
        
        border: 1px solid #ccc;
        outline: none;
        border-radius: 4px;
    }
    button {
        padding: 5px 15px;
        border-radius: 8px;
        background-color: transparent;
        border: 1px solid #ccc;
        transition: .3s;
    }
    button:hover {
        background-color: #ccc;
    }
</style>