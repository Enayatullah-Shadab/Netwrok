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
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
// import Pop from '../utils/Notifier'
// import { profileService } from '../services/ProfileService'

export default {
  name: 'Home',
  setup() {
    // onMounted(async() => {
    //   try {
    //     await profileService.getAll()
    //   } catch (error) {
    //     Pop.toast(error, 'error')
    //   }
    // })

    return {
      profile: computed(() => AppState.profile)
    }
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
