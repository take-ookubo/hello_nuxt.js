<template lang="pug">
  section(class="container")
    a(href="/") ページ遷移: SSR
    br
    nuxt-link(to="/") ページ遷移: SPA
    div
      h1 Life cycle と Vuex と nuxtClientinit のテスト
      p store={{store}}
      p not_store={{not_store}}
      button(@click="init") Init
      button(@click="random") Random
</template>

<script>
export default {
  data: function () {
    console.log('--- data ---');
    return {
      not_store: {data: true},
    };
  },
  asyncData({store}) {
    console.log('--- asyncData ---')
    // asyncData() で store は取得はできない
    // console.log('store: ' + JSON.stringify(store.state.me, null, 2))
    // 取得はできないけど、セットはできる？
    store.commit('addVal', 'asyncData')
    return {
      store: store.getters['me'],
    }
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
      this.$store.commit('init');
    },
    random (e) {
      console.log('--- random ---')
      this.$store.commit('addVal', Math.random());
      this.not_store = Math.random();
    },
 }
}
</script>
