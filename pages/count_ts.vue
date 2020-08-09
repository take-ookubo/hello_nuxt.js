<template>
  <section class="container">
    <a href="/">Top</a>
    <div>
      <h1>counter</h1>
      <p>count={{count}}</p>
      <button @click="addCount">カウントアップ</button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
class Counter extends Vue {
  count: number = 0;
  addCount(): void {
    this.count++;
  }

  mounted(): void {
    console.log("ライフサイクルmounted");
  }
}

export default Counter;
// export default {
//   computed: {
//     count() { return this.$store.state.counter.count }
//   },
//   methods: {
//     addCount (e) {
//       this.$store.commit('counter/add')
//     }
//   }
// }
</script>
