<template>
  <div class="container">
    <div>
      <h1>nuxt_web</h1>
      <div class="links">
        <a href="count_data">count for data(SSR)</a>, <nuxt-link to="/count_data">count for data(SPA)</nuxt-link>
        <br />
        <a href="count_store">count for store(SSR)</a>, <nuxt-link to="/count_store">count for store(SPA)</nuxt-link>
        <br />
        <a
          href="count_ts"
          class="button--grey"
        >
          counter_ts
        </a>
        <a
          href="posts"
          class="button--grey"
        >
          posts
        </a>
        <a href="form" class="button--grey">
          form
        </a>
        <a href="life_cycle">Life cycle SSR</a>, <nuxt-link to="/life_cycle">Life cycle:SPA</nuxt-link>
        <br />
        <a href="life_cycle_vuex">Life cycle with vuex:SSR</a>, <nuxt-link to="/life_cycle">Life cycle  with vuex:SPA</nuxt-link>
        <br />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  components: {
    Logo,
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
