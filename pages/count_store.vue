<template lang="pug">
  section(class="container")
    a(href="/") Top:SSR
    br
    nuxt-link(to="/") Top:SPA

    div
      h1 counter to store(template: pug)
      p count={{count}} // <= 自動更新されない
      p calc={{calc}}
      button(@click="init") クリア
      button(@click="add") カウントアップ
</template>

<script>
export default {
  data() {
    return {
      count: this.$store.state.counter.count,
    }
  },
  computed: {
    calc() { return this.$store.state.counter.count }
  },
  methods: {
    init () {
      this.$store.commit('counter/init')
    },
    add () {
      this.$store.commit('counter/add')
    }
  }
}
</script>
