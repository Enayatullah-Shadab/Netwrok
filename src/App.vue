<template>
  <main>
    <div class="row ">
      <div class="col-3 ">
        <aside class="bg-info text-light text-center">
          <h3>Login</h3>
          <Post :ads="ads" :account="account" />
        </aside>
      </div>
      <div class="col-9">
        <div class="row ">
          <div class="col-12 ">
            <Navbar />
          </div>
        </div>
        <div class="row">
          <div class="col-9">
            <router-view />
          </div>
          <div class="col-3 text-center">
            <h2 class="mr-5">
              adds
            </h2>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by Shadab
    </div>
  </footer>
</template>

<script>
import { computed, h, onMounted } from 'vue'
import { AppState } from './AppState'
import Pop from './utils/Notifier'
import { adsService } from './services/AdsService'

export default {
  name: 'App',
  setup() {
    onMounted(async() => {
      try {
        await adsService.getAllAds()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      appState: computed(() => AppState),
      Ads: computed(() => AppState.ads),
      account: computed(() => AppState.account)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
