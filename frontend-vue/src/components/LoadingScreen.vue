<template>
    <div class="loading-screen">
      <Loading
        :active.sync="isTrue"
        :is-full-page="isTrue"
        color="#000"
        loader="dots"
        :opacity="opacity"
      />
    </div>
</template>

<script>
import Vue from 'vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
Vue.use(Loading)

export default {
  name: 'LoadingScreen',
  components: {
    Loading
  },
  data () {
    return {
      isTrue: true,
      opacity: 1
    }
  }
}
</script>
