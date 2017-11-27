<template>
  <div class="columns">
    <div class="column is-offset-2 is-8">
      <div class="content" v-html="getPostDetails.content"></div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
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
      ...mapGetters({
        getPostDetails: 'getPostDetails'
      })
    },
    created () {
      this.loadPostDetails()
    },
    methods: {
      ...mapActions({
        postDetails: 'postDetails'
      }),
      loadPostDetails () {
        let slug = this.$route.params.slug
        this.postDetails(slug)
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
