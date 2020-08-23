export const state = () => ({
  me: null,
  you: null,
})

export const mutations = {
  init(state, data: null | object) {
    if(state.me){
      for(let v in state.me){
        console.log(v);
        delete state.me[v];
      }
    }else{
      state.me = {};
    }
  }
  ,
  addVal(state, key, val) {
    state.me[key] = true
  },
  setYourName(state, data: null | object) {
    state.you = data
  },
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    console.log('nuxtServerInit')
    commit('init')
    commit('addVal', 'nuxtServerInit')
  },
  async nuxtClientInit({ commit, dispatch }) {
    console.log('nuxtClientInit')
    commit('addVal', 'nuxtClientInit')
  },
}

export const getters = {
  me(state): Member | null {
    if (state.me) {
      return state.me
    }
    return {getters: true}
  },
  you(state): Member | null {
    if (state.you) {
      return state.me
    }
    return {}
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
