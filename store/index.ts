export const state = () => ({
  // 仮でログイン情報を保持する事を想定
  me: null,
})

export const mutations = {
  init(state, key: null | object) {
    console.log('--- store.init ---')
    if(state.me){
      for(let v in state.me){
        console.log(`delete: ${v}`)
        delete state.me[v]
      }
    }else{
      state.me = {}
    }
    if(key) {
      state.me[key] = true
    }
  }
  ,
  addVal(state, key, val) {
    console.log('--- store.addVal ---')
    state.me[key] = true
    console.log('store: ' + JSON.stringify(state.me, null, 2))
  },
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    console.log('--- nuxtServerInit ----')
    // nuxtClientInit で上書きされる？
    commit('init', 'nuxtServerInit')
    // 初期化しとかないとエラーになる
    // commit('addVal', 'nuxtServerInit')
  },
  async nuxtClientInit({ commit, dispatch }) {
    console.log('--- nuxtClientInit ---')
    commit('init', 'nuxtClientInit')
    // 初期化しとかないとエラーになる
    // commit('addVal', 'nuxtClientInit')
  },
}

export const getters = {
  me(state): Member | null {
    if (state.me) {
      return state.me
    }
    return {getters: true}
  },
}

// export class Member {
//   asyncData: boolean;
//   fetch: boolean;
//   beforeCreate: boolean;
//   computed: boolean;
//
//   constructor(args: Object) {
//     Object.keys(args).forEach(k => this[k] = args[k])
//   }
// }
