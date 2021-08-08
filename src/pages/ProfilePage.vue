<template>
  <div class="profile">
    <h3>This is from profile page</h3>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  setup() {
    return {
      Acount: {
        type: Object,
        required: true
      }
    }
  }
}
</script>
