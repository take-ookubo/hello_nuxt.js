<template lang="pug">
  div(class="container")
    a(href="/") Top:SSR
    br
    nuxt-link(to="/") Top:SPA

    div
      h1 Life cycle
      p count={{count}}
      p calc={{calc}}
      button(@click="init") クリア
      button(@click="add") カウントアップ
      button(@click="count_from_ssr") SSR のカウント取得
</template>

<script>
// 呼び出される順に記載
export default {
  asyncData(ctx) {
    console.log('---- asyncData ----');
    return {
      count_ssr: 10,
      // SSR 側でセットできるが data() より優先される
      count: 100,
    }
  },
  fetch () {
    console.log('---- fetch ----');
    // 無視される
    this.count_ssr = 20;
    return {
      // 両方とも無視される
      count_ssr: 30,
      count: 300,
    }
  },
  // reload 時に呼ばれる？
  beforeDestroy() {
    console.log('---- beforeDestroy ----');
  },
  beforeCreate() {
    console.log('---- beforeCreate ----');
  },
  data() {
    console.log('---- data ----');
    console.log(this.count_ssr);
    return {
      // asyncData() でのセットが優先される
      count: 0,
    }
  },
  created() {
    console.log('---- created ----');
  },
  beforeMount() {
    console.log('---- beforeMount ----');
  },
  mounted() {
    console.log('---- mounted ----');
  },
  // ここからはユーザ操作
  beforeUpdate() {
    console.log('---- beforeUpdate ----');
  },
  methods: {
    init () {
      console.log('---- init ----');
      this.count = 0;
    },
    add () {
      console.log('---- add ----');
      this.count++;
    },
    count_from_ssr() {
      console.log('---- count_from_ssr ----');
      this.count = this.count_ssr;
    },
  },
  computed: {
    calc() {
      console.log('---- calc ----');
      return this.count * 2
    },
  },
}
</script>
