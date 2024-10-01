<template>
    <section>
        <HeaderWindow :username="props.user"/>
        <section class="messageWindow" ref ="messagesWindow">
            <TransitionGroup  name="messageList">
                <Message v-for="message in messageStore.messages" :messageData="message" :class="[message.username === props.user ? 'self' : '']" :key="message"/>
            </TransitionGroup>
        </section>
        <InputForm @sendMessage="(message) => RenderMessage(message)"/>
</section>
</template>
<script setup>
import HeaderWindow from "./HeaderWindowComponent.vue"
import InputForm from "./InputFormComponent.vue"
import Message from './MessageComponent.vue'
import {useMessageStore} from '../store/messageStore';
import {defineProps, ref, watch, nextTick, onMounted} from 'vue';

const props = defineProps({
    user: String
});
const messagesWindow = ref(null);
const messageStore = useMessageStore();

function RenderMessage(message) {
    messageStore.addMessage({
    text: message,
    username: props.user
})
}

function scrollToBottom() {
      if (messagesWindow.value) {
        messagesWindow.value.scrollTop = messagesWindow.value.scrollHeight;
  }
}

watch(
 messageStore.messages,
  async () => {
    await nextTick(); 
    scrollToBottom(); 
  }
);
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 600px;
    border: 1px solid #ccc;
    padding: 10px 0;
    width: 500px;
}
section:has(.messageWindow) {
    display: grid;
    grid-template-rows: 20px 480px 80px;
    gap: 10px
}
.messageWindow {
    overflow-y: scroll;
    overflow-anchor: auto;
    height: 480px;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: right;
    gap: 15px; 
 
}
.messageList-enter-active,
.messageList-leave-active {
  transition: all 2s ease;
}
.messageList-enter-from,
.messageList-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
.messageList-enter-from.self,
.messageList-leave-to.self {
  opacity: 0;
  transform: translateX(40px);
}
</style>