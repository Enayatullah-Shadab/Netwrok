<template>
  <div class="mt-5">
    <div v-if="account.id">
      <Profile :account="account" />
    </div>
    <div v-else>
      <h1>Please Sign In here!</h1>
    </div>
    <div class="mt-5">
      <Ads v-for="p in ads" :key="p.id" :ads="p" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ads: {
      type: Object,
      required: true
    },
    account: {
      type: Object,
      required: true
    }
  }
}
</script>
