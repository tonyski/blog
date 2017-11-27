<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
  import 'bulma/css/bulma.css'

  export default {
    name: 'app'
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
