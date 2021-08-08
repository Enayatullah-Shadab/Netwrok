<template>
  <div class="home container">
    <div class="row">
      <!-- <ProfileThread :profile="profile" /> -->
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { profileService } from '../services/ProfileService'

export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await profileService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })

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