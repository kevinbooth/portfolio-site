<template>
  <div class="page">
    <div class="container">
      <Navigation v-bind:msg="page['title']"/>
      <div v-html="page['content']" class="page__content">
        {{ page['content'] }}
      </div>
    </div>
    <LoadingScreen v-if="isLoading"/>
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
import LoadingScreen from '../components/LoadingScreen'

export default {
  name: 'About',
  components: {
    Navigation,
    LoadingScreen
  },
  data () {
    return {
      page: '',
      isLoading: true
    }
  },
  props: {
    slug: '' // page title
  },
  created: function () {
    this.$http.get('wp/v2/pages?slug=' + this.slug).then(response => {
      let r = response.data['0']
      let pageData = {
        'title': r.title.rendered,
        'content': r.content.rendered
      }
      this.page = pageData
      this.isLoading = false
    }, error => { alert(error) })
    console.log(this.isLoading)
  }
}
</script>
