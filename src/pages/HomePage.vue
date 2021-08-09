<template>
  <div class="home container">
    <div class="d-flex flex-column align-items-center">
      <PostSearch />
    </div>
    <div v-if="account.id !== post.creatorId">
      <PostForm />
    </div>
    <div class="row">
      <PostsThread :post="post" />
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
