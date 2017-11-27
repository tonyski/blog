import api from '../../api'

const state = {
  posts: {
    pagination: {},
    list: []
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
      commit('SET_POST_SUCCESS', res)
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
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
