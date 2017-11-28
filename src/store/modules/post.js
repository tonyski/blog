import api from '../../api'

const state = {
  posts: {
    data: [],
    links: {},
    meta: {}
  },

  fetch: false,

  details: {}
}

const mutations = {
  FETCH_POST (state) {
    state.fetch = true
  },

  SET_DETAILS (state, data) {
    state.details = data
  },

  SET_POST_SUCCESS (state, data) {
    state.posts = data
    state.fetch = false
  },

  SET_POST_FAIL (state) {
    state.posts = {data: [], links: {}, meta: {}}
    state.fetch = false
  },

  CLEAR_DETAILS (state) {
    state.details = {}
  }
}

const actions = {
  async postList ({commit}, data = {page: 1}) {
    commit('FETCH_POST')
    const res = await api.getPostList(data)
      .catch(err => console.error(err))
    if (res) {
      let list
      if (res.meta.current_page === 1) list = res.data
      else list = [...state.posts.data, ...res.data]
      commit('SET_POST_SUCCESS', {
        data: list,
        links: res.links,
        meta: res.meta
      })
    } else commit('SET_POST_FAIL')
  },
  async postDetails ({commit}, data) {
    const res = await api.getPost(data)
      .catch(err => console.error(err))
    commit('SET_DETAILS', res.data || {})
  }
}

const getters = {
  getPosts: state => {
    return state.posts
  },
  getPostDetails: state => {
    return state.details
  },
  isFetch: state => {
    return state.fetch
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
