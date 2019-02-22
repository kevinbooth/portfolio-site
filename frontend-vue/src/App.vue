<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>
