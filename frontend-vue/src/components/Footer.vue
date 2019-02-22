<template>
    <div class="footer">
        <div class="container">
            <router-link to="/"><img class="footer__logo" src="../assets/gyka-logo-footer.png"></router-link>
            <router-link :to="footerItem.url" class="footer__link" v-for="footerItem in footerItems" :key="footerItem.id">{{ footerItem.post_title}}</router-link>
            <p class="footer__copyright">© {{ new Date().getFullYear() }} GYK Antler All Rights Reserved. </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footerItems: []
    }
  },
  props: {
    msg: ''
  },
  created: function () {
    this.$http.get('menus/v1/menus/footer').then(response => {
      for (let footerItem in response.data.items) {
        this.footerItems.push(response.data.items[footerItem])
        // console.log(response.data.items[navItem])
      }
      // console.log(response.data)
    }, error => { alert(error) })
  }
}
</script>
