import {defineStore} from 'pinia'
import {ref} from 'vue';
export const useMessageStore = defineStore('messages', () => {
    const messages = ref([]);
    function addMessage(newMessage) {
        if(newMessage.text.length === 0 || newMessage.username.length === 0) {
            alert("Error message");
            return 0;
        }
        newMessage.id = newMessage.length;
        newMessage.date = new Date();
        messages.value.push(newMessage);
        messages.value = messages.value;
    }
    return {messages,addMessage};
})
