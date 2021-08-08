<template>
  <div class="profle">
    <p>Welcome {{ account.name }}</p>
    <p> {{ account.email }}</p>
    <p> {{ account.github }}</p>
    <p> {{ account.linkedin }}</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Shadab',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
