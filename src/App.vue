<script setup>
import ChatWindow from "./components/ChatWindow.vue";

const listUsers = ['user1', 'user2'];
console.log(listUsers[0])
</script>

<template>
  <template v-for="user in listUsers">

    <ChatWindow :user="user"/>
  </template>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
