<template>
  <div class="post">
    <div class="post__entry" v-for="post in paginatedData" :key="post.id">
      <router-link class="post__link" :to="{ name: 'blogDetail', params: { id: post.id }  }">
        <img class="post__img" v-bind:src="post._embedded['wp:featuredmedia']['0'].source_url"/>
        <h3 class="post__title">{{ post.title.rendered }}</h3>
        <p class="post__date">{{ post.date.substring(0, 10) }}</p>
        {{ post.excerpt.rendered | stripHtml }}
      </router-link>
    </div>
    <div class="pagination">
      <a class="pagination__prev" v-if="pageNumber != 0" @click="prevPage">Previous</a>
      <a class="pagination__next" v-if="(pageNumber + 1) * size < posts.length" @click="nextPage">Next</a>
      <p>Page Number: {{ pageNumber + 1 }}/{{ pageCount }}</p>
    </div>
    <LoadingScreen v-if="isLoading"/>
  </div>
</template>

<script>
import LoadingScreen from './LoadingScreen'

export default {
  name: 'Posts',
  components: {
    LoadingScreen
  },
  data () {
    return {
      posts: [],
      pageNumber: 0,
      isLoading: true
    }
  },
  props: {
    size: {
      default: 2
    }
  },
  methods: {
    nextPage () {
      let postEntry = document.getElementsByClassName('post__entry')[0]
      this.pageNumber++
      window.scroll({
        top: postEntry.offsetTop,
        behavior: 'smooth'
      })
    },
    prevPage () {
      let postEntry = document.getElementsByClassName('post__entry')[0]
      console.log(postEntry)
      this.pageNumber--
      window.scroll({
        top: postEntry.offsetTop,
        behavior: 'smooth'
      })
    }
  },
  computed: {
    pageCount () {
      let l = this.posts.length
      let s = this.size
      return Math.ceil(l / s)
    },
    paginatedData () {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.posts.slice(start, end)
    }
  },
  created: function () {
    this.$http.get('wp/v2/posts?_embed').then(response => {
      for (let post in response.data) {
        this.posts.push(response.data[post])
        // console.log(this.posts[post])
      }
      this.isLoading = false
    }, error => { alert(error) })
  }
}
</script>
