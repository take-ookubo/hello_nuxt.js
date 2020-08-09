<template>
  <section class="container">
    <a href="/">Top</a>
    <div>
      <h1>Qiita posts</h1>
      <button @click="fetch">fetch url</button>
      <button @click="delete_all">delete all</button>
      <ul>
        <li v-for="(post, i) in posts" :key="i">
          {{i+1}}:
          <a :href="post.url">
            {{post.title}}
          </a>
          user: {{ (!post.user.name) ? post.user.twitter_screen_name : post.user.name}}
          <button @click="delete_post(i)">delete</button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    posts: [{title: 'none'}]
  }),

  async asyncData({$axios}) {
    console.log("axios.get")

    const res = await $axios.$get("https://qiita.com/api/v2/items");
    // 配列で返ってくるのでJSONにして返却
    console.log(res[0])
    return {
      posts: res
    };
  },

  methods: {
    async fetch (e) {
      console.log('fetch')
      const res = await this.$axios.$get("https://qiita.com/api/v2/items");
      this.posts = res
    },

    delete_all: function(e) {
      this.posts = []
    },

    delete_post: function(i) {
      this.posts.splice(i, 1)
    }
  }
}
</script>
