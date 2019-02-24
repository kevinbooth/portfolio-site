<template>
  <div class="home">
    <div class="container">
      <Navigation msg="Fiercely Independent"/>
    </div>
    <Hero/>
    <div class="container">
      <Projects/>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

export default {
  name: 'Home',
  components: {
    Navigation,
    Hero,
    Projects
  }
}
</script>
