<template>
  <div class="home container">
    <div class="d-flex flex-column align-items-center">
      <h3 class="bg-primary text-light p-2 rounded d-flex">
        <span class="text-center text-light m-2 p-1">Post will come here</span>
      </h3>
    </div>
  </div>
</template>

<script>
// import { profileService } from '../services/ProfileService'

export default {
  name: 'Home',
  setup() {
    // profileService.getPostByProfile('id')
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
