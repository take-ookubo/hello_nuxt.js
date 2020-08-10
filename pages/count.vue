<template lang="pug">
  section(class="container")
    a(href="/") Top
    div
      h1.red counter(template: pug)
      p count={{count}}
      button(@click="addCount") カウントアップ
</template>

<script>
export default {
  computed: {
    count() { return this.$store.state.counter.count }
  },
  methods: {
    addCount (e) {
      this.$store.commit('counter/add')
    }
  }
}
</script>

<style lang="scss">
.red {
  color: red;
}
</style>
