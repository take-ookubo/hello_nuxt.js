<template lang="pug">
  section(class="container")
    a(href="/") Top:SSR
    br
    nuxt-link(to="/") Top:SPA

    div
      h1 counter to data(template: pug)
      p count={{count}}
      p calc={{calc}}
      button(@click="init") クリア
      button(@click="add") カウントアップ
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    calc() { return this.count * 2 }
  },
  methods: {
    init () {
      this.count = 0;
    },
    add () {
      this.count++
    }
  }
}
</script>
