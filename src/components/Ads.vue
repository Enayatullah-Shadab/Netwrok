<template>
  <div class="row">
    <div class="col-12 text-white mb-2">
      <p class="pt-2">
        {{ ads.title }}
      </p>
      <a :href="'https://' + ads.linkURL">
        <img class="pb-3 pl-3" :src="ads.square" height="180" alt="Adds Piece">
      </a>
    </div>
  </div>
</template>

<script>
import {} from '../assets/scss/main.scss'
export default {
  props: {
    ads: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>
