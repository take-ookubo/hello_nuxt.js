export const state = () => ({
  count: 0
})

export const mutations = {
  init(state) {
    console.log('init')
    state.count = 0
  },
  add(state) {
    console.log('add')
    state.count += 1
  }
}

