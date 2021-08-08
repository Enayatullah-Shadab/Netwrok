<template>
  <main>
    <div class="row ">
      <div class="col-3 ">
        <aside class="bg-info text-light text-center">
          <h3> Profile Login</h3>
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
            <h3> This is from App.vue file</h3>
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
export default {
  name: 'App',
  setup() {
    onMounted(() => {
      // my method should be placed here
    })
    return {
      appState: computed(() => AppState)
      // account and post also should be placed here
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
