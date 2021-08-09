<template>
  <div class=" home d-flex justify-content-end pt-1">
    <PostSearch />
  </div>
  <div v-if="account.id !== post.creatorId">
    <PostForm />
  </div>
  <div class="row">
    <PostsThread :post="post" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postService } from '../services/PostService'
import { AppState } from '../AppState.js'
import Pop from '../utils/Notifier'

export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await postService.getAllPosts()
        await postService.getPostByPage()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      account: computed(() => AppState.account),
      post: computed(() => AppState.post)
    }
  },
  components: {
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
