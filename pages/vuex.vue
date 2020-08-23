<template lang="pug">
  section(class="container")
    a(href="/") ページ遷移: SSR
    br
    nuxt-link(to="/") ページ遷移: SPA
    div
      h1 vuex(store) ライフサイクルテスト
      p store={{store}}
      p not_store={{not_store}}
      button(@click="init") Init
      button(@click="random") Random
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: function () {
    console.log('--- data ---');
    return {
      not_store: {data: true},
    };
  },
  asyncData({store}) {
    console.log('--- asyncData ---')
    // asyncData は SSR でしか実行されいなので取得はできない
    console.log('store: ' + JSON.stringify(store.state.me, null, 2))
    // 取得はできないけど、セットはできる？
    store.commit('addVal', 'asyncData')
    // store.commit('setYourName', { name: Date.now()})
    return {
      // not_store: {asyncData: true },
      store: store.getters['me'],
    }
  },
  fetch({store, params}) {
    console.log('--- fetch ---')
    console.log('store: ' + JSON.stringify(store.state.me, null, 2))
    // this.not_store.fetch = true
    store.commit('addVal', 'fetch');
    // store.commit('setYourName', { name: Date.now()})
  },
  beforeCreate() {
    console.log('--- beforeCreate ---')
    if(this.not_store){
      this.not_store.beforeCreate = true;
    }
    this.$store.commit('addVal', 'beforeCreate');
  },
  computed: {
    get_not_store() {
      console.log('--- get_not_store ---')
      return this.not_store;
    },
    get_store() {
      console.log('--- get_store ---')
      return this.$store.getters['me']
    }
  },
  methods: {
    init (e) {
      console.log('--- init ---')
      // this.not_store = {};
      this.$store.commit('init');
      this.get_not_store();
    },
    random (e) {
      console.log('--- random ---')
      this.not_store = Math.random();
      this.$store.commit('addVal', Math.random());
    },
 }
}
</script>
