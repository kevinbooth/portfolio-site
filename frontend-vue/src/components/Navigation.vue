<template>
  <div class="nav">
      <router-link to="/"><img class="nav__logo" src="../assets/kb-logo.png"></router-link>
      <h5 class="nav__bi-line">{{ msg }}</h5>
      <div class="container">
          <div class="three columns" v-for="navItem in navigation" :key="navItem.id">
              <router-link class="nav__item" :to="navItem.url">{{ navItem.post_title}}</router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      navigation: [],
      columns: 0
    }
  },
  props: {
    msg: ''
  },
  created: function () {
    this.$http.get('menus/v1/menus/menu-1').then(response => {
      for (let navItem in response.data.items) {
        this.navigation.push(response.data.items[navItem])
        // console.log(response.data.items[navItem])
      }
      // console.log(response.data)
    }, error => { alert(error) })
    this.columns = 12 / this.navigation.length
  }
}
</script>
