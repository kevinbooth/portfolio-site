<template>
  <div class="home">
    <div class="container">
      <Navigation msg="Fiercely Independent"/>
    </div>
    <Hero/>
    <div class="container">
      <Posts/>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Posts from '../components/Posts'

export default {
  name: 'Home',
  components: {
    Navigation,
    Hero,
    Posts
  }
}
</script>
