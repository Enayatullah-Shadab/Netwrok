<template>
  <div>
    <form @submit.prevent="getPosts">
      <input v-model="state.query" type="text" placeholder="Search Posts...">
      <button>Search</button>
    </form>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { postService } from '../services/PostService'
export default {
  name: 'PostSearch',
  setup() {
    const state = reactive({
      query: ''
    })
    return {
      state,
      getPosts() {
        if (state.query !== '') {
          postService.getBySearch(state.query)
          state.query = ''
        }
      }
    }
  }
}
</script>
