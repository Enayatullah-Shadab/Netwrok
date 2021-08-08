<template>
  <div class="profile m-1 p-1">
    <!-- this is my profile -->
    <img class="rounded-circle" :src="account.picture" alt="profile image">
    <h5>{{ account.class }}</h5>
    <h5>{{ account.name }}</h5>
    <h5>{{ account.github }}</h5>
    <h5>{{ account.linkedin }}</h5>
    <h5>{{ account.resume }}</h5>
  </div>
</template>
<script>

export default {
  props: {
    account: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      // my methods will be applied here
    }
  }
}
</script>
