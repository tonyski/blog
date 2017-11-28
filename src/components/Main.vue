<template>
  <div>
    <div class="columns is-multiline">
      <article class="column is-offset-2 is-8" v-for="post in postList">
        <h2 class="datetime">{{ post.created_at }}</h2>
        <router-link :to="'/' + post.slug" class="post-column">
          <h1 class="title">{{ post.title }}</h1>
        </router-link>
        <p class="subtitle">{{ post.subtitle }}</p>
      </article>
      <div class="column is-12" style="text-align: center">
        <button class="button" v-if="hasMorePost" @click="loadMore()" :class="{'is-loading':isLoading}">加载更多</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'PostList',
    data () {
      return {
        page: 1
      }
    },
    computed: {
      ...mapGetters(['getPosts', 'isFetch']),
      postList () {
        return this.getPosts.data
      },
      hasMorePost () {
        return this.getPosts.meta.last_page > this.page
      },
      isLoading () {
        return this.isFetch
      }
    },
    created () {
      this.loadPosts()
    },
    methods: {
      loadPosts (page = 1) {
        if (page < 1 || page > this.getPosts.meta.last_page) return
        this.$store.dispatch('postList', {page: page})
      },
      loadMore () {
        this.$store.dispatch('postList', {
          page: ++this.page
        })
      }
    }
  }
</script>
<style>
  article {
    margin-bottom: 2rem;
  }

  .datetime {
    margin-bottom: .2rem;
  }

  .title {
    margin-bottom: 1rem;
    font-weight: 300;
  }

  .subtitle {
    font-size: 1.2rem;
    font-weight: 300;
  }
</style>
