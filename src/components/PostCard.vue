<template>
  <div class="col-8 mt-3 ml-3 bg-info">
    <div class="row flex-column mt-2">
      <div class="col-12 d-flex " v-if="account.id === post.creatorId">
        <button type="button" class="btn btn-outline-warn" @click="destroy">
          Delete
        </button>
      </div>
      <div class="col-3 d-flex flex-row align-items-center">
        <img class="rounded" :src="post.creator.picture" height="120" alt="Profile Picture">
        <div class="col-9">
          <div class="row flex-column justify-content-between">
            <div class="col">
              {{ post.creator.name }}
            </div>
            <div class="col-6">
              {{ post.createdAt }}
            </div>
          </div>
        </div>
      </div>
      <div v-if="post.imgUrl">
        <div class="col-10  py-2">
          <h5>{{ post.body }}</h5>
        </div>
        <div class="col-12 text-center pb-3">
          <img :src="post.imgUrl" alt=" Image" width="500">
        </div>
      </div>
      <div v-else>
        <div class="col-11 ml-2 py-2">
          <h5>{{ post.body }}</h5>
        </div>
      </div>
      <div class="col-12 d-flex flex-row justify-content-end mb-2 action">
        <p @click="like" class="mr-2">
          ❤
        </p>
        <p class="mr-1">
          {{ post.likeIds.length }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postService } from '../services/PostService'
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      async destroy() {
        try {
          if (await Pop.confirm()) {
            await postService.destroyPost(props.post.id)
            Pop.toast('Deleted')
          }
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async like() {
        try {
          await postsService.editLikes(props.post.id, props.post.creatorId)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>
