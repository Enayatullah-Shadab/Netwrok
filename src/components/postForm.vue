<template>
  <div class="post-form">
    <form class="d-flex" @submit.prevent="createPost">
      <div class="form-group">
        <input
          type="text"
          name="body"
          v-model="state.newPost.body"
          class="form-control"
          placeholder="share your idea"
          required
        />
      </div>
      <div class="d-flex align-items-center">
        <button type="submit" class="btn bg-primary mb-3 ">
          Post
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import Pop from '../utils/Notifier'
import { postService } from '../services/PostService'
export default {
  setup() {
    const state = reactive({
      newPost: {}
    })
    return {
      state,
      async createPost() {
        try {
          await postService.createPost(state.newPost)
          state.newPost = {}
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>
<style scoped>
.btn{
  border-radius: 20px;
}
</style>
