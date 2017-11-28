<template>
  <div class="columns">
    <div class="column is-offset-2 is-8">
      <hr>
      <div class="content" v-html="postContent"></div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import marked from 'marked'
  import 'highlight.js/styles/github-gist.css'

  marked.setOptions({
    highlight: (code) => {
      return require('highlight.js').highlightAuto(code).value
    }
  })

  export default {
    name: 'PostDetails',
    computed: {
      ...mapGetters(['getPostDetails']),
      postContent () {
        return this.getPostDetails.content ? marked(this.getPostDetails.content) : ''
      }
    },
    created () {
      this.loadPostDetails()
    },
    methods: {
      loadPostDetails () {
        let slug = this.$route.params.slug
        this.$store.dispatch('postDetails', slug)
      }
    },
    destroyed () {
      this.$store.commit('CLEAR_DETAILS')
    }
  }
</script>
<style>
  pre > code {
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }
</style>
