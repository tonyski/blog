import axios from 'axios'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'https://endnight.com/api'

export default {
  getPostList (params) {
    return axios.get('/posts', {params})
      .then(res => res.data)
  },
  getPost (params) {
    return axios.get('/posts/' + params)
      .then(res => res.data)
  }
}
