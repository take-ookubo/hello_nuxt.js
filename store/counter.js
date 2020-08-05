export const state = () => ({
  count: 0
})

export const mutations = {
  add(state) {
    console.log('add')
    state.count += 1
  }
}

