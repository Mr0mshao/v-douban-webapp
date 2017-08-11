import axios from '../../utils/fetch'
const Movie = {
  state: {
    movieList: [],
    top: [],
    coming: [],
    usRank: [],
    serachResult: [],
    movieContent: {},
    movieComment: []
  },
  getters: {
    'done_movie_list': state => state.movieList,
    'done_movie_top': state => state.top,
    'done_movie_usRank': state => state.usRank,
    'done_movie_coming': state => state.coming,
    'done_movie_searchResult': state => state.serachResult,
    'done_movie_content': state => state.movieContent,
    'done_movie_comment': state => state.movieComment
  },
  actions: {
    'fetch_movie_list' ({commit}, params) {
      return new Promise((resolve, reject) => {
        axios
        .get(`api/movie/in_theaters?start=${params.start}&count=${params.count}`)
        .then((res) => {
          commit('toggle_movie_list', res.subjects)
          resolve({
            start: res.start,
            count: res.count
          })
        })
        .catch(err => console.log(err))
      })
    },
    'fetch_movie_top' ({commit}, params) {
      return new Promise((resolve, reject) => {
        axios
        .get(`api/movie/top250?start=${params.start}&count=${params.count}`)
        .then((res) => {
          commit('toggle_movie_top', res.subjects)
          resolve({
            start: res.start,
            count: res.count
          })
        })
        .catch(err => console.log(err))
      })
    },
    'fetch_movie_coming' ({commit}, params) {
      return new Promise((resolve, reject) => {
        axios
        .get(`api/movie/coming_soon?start=${params.start}&count=${params.count}`)
        .then((res) => {
          commit('toggle_movie_coming', res.subjects)
          resolve({
            start: res.start,
            count: res.count
          })
        })
        .catch(err => console.log(err))
      })
    },
    'fetch_movie_usRank' ({commit}) {
      axios
      .get('api/movie/us_box')
      .then((res) => {
        commit('toggle_movie_usRank', res.subjects)
      })
    },
    'fetch_movie_searchResult' ({commit}, keyword) {
      axios
      .get(`api/movie/search?q=${keyword}`)
      .then((res) => {
        commit('toggle_movie_searchResult', res.subjects)
      })
    },
    'fetch_movie_content' ({commit, dispatch}, id) {
      axios
      .get(`api/movie/subject/${id}`)
      .then((res) => {
        commit('toggle_movie_content', res)
        // dispatch('fetch_movie_comment', id)
      })
    },
    'fetch_movie_comment' ({commit}, id) {
      axios
      .get(`api/movie/subject/${id}/comments`)
      .then((res) => {
        commit('toggle_movie_comment', res)
      })
    }
  },
  mutations: {
    'toggle_movie_list' (state, res) {
      state.movieList = state.movieList.concat(res)
    },
    'toggle_movie_coming' (state, res) {
      state.coming = state.coming.concat(res)
    },
    'toggle_movie_top' (state, res) {
      state.top = state.top.concat(res)
    },
    'toggle_movie_usRank' (state, res) {
      state.usRank = res
    },
    'toggle_movie_searchResult' (state, res) {
      state.serachResult = res
    },
    'toggle_movie_content' (state, res) {
      state.movieContent = res
    },
    'toggle_movie_comment' (state, res) {
      state.movieComment = res
    }
  }
}
export default Movie
