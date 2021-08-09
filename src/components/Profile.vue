<template>
  <div>
    <img class="btn" :src="account.picture" alt=":)">
    <h5>{{ account.class }}</h5>
    <h3>{{ account.name }}</h3>
    <h5 class="pt-2">
      {{ account.github }}
    </h5>
    <h5 class="pt-2">
      {{ account.linkedin }}
    </h5>
    <h5 class="pt-2">
      {{ account.resume }}
    </h5>
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
<style>
.btn{
  border-radius: 50%;
}
</style>
