<template>
  <div class="profileLogin">
    <img :src="account.pricture" alt=":)">
    <router-link :to="{name: Account}">
      <div class="row m-2 p-1">
        <div class="vw-100 align-items-center justify-content-center d-flex">
          <img class="profile-img round-border" :src="account.picture" :alt="account.name">
        </div>
        <div class="d-flex align-items-end justify-content-end vw-100">
          <span class="bg-light round-border m-1 p-2 fa fa-user fa-2x" aria-hidden="true" v-if=" account.graduated==true"></span>
          <span class="bg-light round-border m-1 p-2 fa fa-user fa-2x" aria-hidden="true"></span>
        </div>
      </div>
    </router-link>
    <div class="row">
      <div class="col-3">
        <p class="text-wheat text-light">
          {{ account.name }}
        </p>
      </div>
      <div class="col-3 d-flex flex-colunm m-2 p-1 text-dark">
        <p v-if="account.github" class="lead coursor" :href="account.github">
          <span class="mr-1 fab-lg fa-github"></span><b>GitHub</b>
        </p>
        <p v-if="account.linkedin" class="lead coursor" :href="account.linkedin">
          <span class="mr-1 fab-lg fa-linkedin"></span><b>LinkedIn</b>
        </p>
        <p v-if="account.resume" class="lead coursor" :href="account.resume">
          <span class="mr-1 fa fab-lg fa-file-alt"></span><b>Resume</b>
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  name: 'Login',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>
<style lang='scss' scoped>
.cursor{
    cursor: pointer;
}
.round-border{
    border-radius: 50%;
    border: 2px solid darkblue;
}
.profile-img{
    width: 70%;
}

</style>
