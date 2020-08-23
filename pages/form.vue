<template>
  <form>
    <label for="input_name">氏名:</label>
    <input type="text" id="input_name" v-model="name" />
    <div>ようこそ {{name}} さん</div>
    <div>loged_name(): {{loged_name}}</div>
    <div>loged_name2(): {{loged_name2}}</div>
    <!-- type なしだと type='submit' されるので注意 -->
    <button type="button" @click="login">ログイン</button>
    <button type="button" @click="login2">ログイン2</button>
    <button type="button" @click="login3">ログイン2</button>
  </form>
</template>

<script>
  export default {
    data: () => ({
      name: 'ゲスト'
    }),
    computed: {
      // this.name に bind されてるので呼び出される
      loged_name: function() {
        console.log('loged_name()');
        return `${this.name}`;
      },
      // this.name に bind されてないので呼び出されない
      loged_name2: function() {
        console.log('loged_name2()');
        return 'タカハシ';
      },
    },
    methods: {
      // 短縮記法
      login() {
        console.log('methods');
        this.name = 'ヤマダ';
      },
      // 無名関数
      login2: function() {
        console.log('methods');
        this.name = 'ヤマダ2'
        return `login2: ${this.name}`;
      },
      // アロー演算
      login3: () => {
        console.log('methods');
        this.name = 'ヤマダ3'
        return `login3: ${this.name}`;
      },
    }
  }
</script>
