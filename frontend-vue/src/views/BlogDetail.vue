<template>
  <div class="page">
    <div class="container">
      <Navigation msg="Blog"/>
      <div class="page__title">{{ post.title }}</div>
      <div class="page__content">
        <a class="page__back" @click="$router.go(-1)">Back</a>
        <div v-html="post['content']">{{ post['content'] }}</div>
      </div>
    </div>
    <LoadingScreen v-if="isLoading"/>
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
import LoadingScreen from '../components/LoadingScreen'

export default {
  name: 'Blog',
  components: {
    Navigation,
    LoadingScreen
  },
  data () {
    return {
      post: '',
      id: this.$route.params.id,
      isLoading: true
    }
  },
  created: function () {
    this.$http.get('wp/v2/posts/' + this.id + '?_embed').then(response => {
      let r = response.data
      let postData = {
        'title': r.title.rendered,
        'content': r.content.rendered
      }
      this.post = postData
      this.isLoading = false
    }, error => { alert(error) })
  }
}
</script>
