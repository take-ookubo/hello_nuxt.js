<template>
  <form>
    <label for="input_name">氏名:</label>
    <input type="text" id="input_name" v-model="name" />
    <div>ようこそ {{name}} さん</div>
  </form>
</template>

<script>
  export default {
    data: () => {
      return {
        name: 'ゲスト'
      }
    }
  }
</script>
