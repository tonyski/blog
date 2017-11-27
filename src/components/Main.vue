<template>
  <div class="columns is-multiline">
    <article class="column is-4" v-for="post in getPosts.data">
      <router-link :to="'/' + post.slug" class="post-column" :class="backgroundClass">
        <strong class="post-info">
          <strong class="post-title">{{ post.title }}</strong>
        </strong>
      </router-link>
    </article>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'PostList',
    data () {
      return {
        backgroundClass: [
          'is-primary', 'is-dark', 'is-link', 'is-success', 'is-danger', 'is-warning'
        ]
      }
    },
    computed: {
      ...mapGetters({
        getPosts: 'getPosts'
      })
    },
    mounted () {
      this.loadPosts()
    },
    methods: {
      ...mapActions({
        postList: 'postList'
      }),
      loadPosts () {
        this.postList()
      }
    }
  }
</script>
<style>
  .post-column {
    display: block;
    height: 240px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    position: relative;
    text-align: center;
  }

  .post-info {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 20px;
  }

  .post-title {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.25;
    padding: 0 20px;
  }
</style>
