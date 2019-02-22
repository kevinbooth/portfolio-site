<template>
  <div class="blog">
    <div class="container">
      <Navigation msg="Blog"/>
      <Posts size="4"/>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
import Posts from '../components/Posts'

export default {
  name: 'Blog',
  components: {
    Navigation,
    Posts
  }
}
</script>
