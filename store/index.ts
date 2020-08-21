export const state = () => ({
  me: null,
})

export const mutations = {
  setMe(state, data: null | object) {
    state.me = data
  },
}

export const actions = {
  async nuxtClientInit({ commit, dispatch }) {
    commit('setMe', {member_no: 9} || null)
  },
}

export const getters = {
  me(state): Member | null {
    if (state.me) {
      return new Member(state.me)
    }
    return null
  },
}

export class Member {
  readonly member_no: number;
  constructor(args: Object) {
    Object.keys(args).forEach(k => this[k] = args[k])
  }
}
