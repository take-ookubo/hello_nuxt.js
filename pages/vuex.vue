<template lang="pug">
  section(class="container")
    a(href="/") Top
    div
      h1 vuex
      p.global_blue.overwrite_blue me={{me}}
      button(@click="init") Init
      button(@click="commit") Commit
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  // asyncData(store) {
  //   console.log(store.state.me)
  // },
  computed: {
    me() { return this.$store.getters.me }
  },
  methods: {
    init (e) {
      this.$store.commit('setMe', { member_no: 1})
    },
    commit (e) {
      this.$store.commit('setMe', { member_no: Math.random()})
    },
 }
}
</script>
