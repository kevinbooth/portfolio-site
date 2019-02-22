<template>
  <div class="hero">
    <div class="hero__container" :style="{ backgroundImage: 'url(' + hero['background-url'] + ')' }">
      <div v-html="hero['content']">
        {{ hero['content'] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data () {
    return {
      hero: ''
    }
  },
  created: function () {
    this.$http.get('wp/v2/heros/53' + '?_embed').then(response => {
      let r = response.data
      let heroData = {
        'background-url': r.better_featured_image.source_url,
        'content': r.content.rendered
      }
      this.hero = heroData
      console.log(r)
    }, error => { alert(error) })
  }
}
</script>
