import axios from '../../utils/fetch'
const Movie = {
  state: {
    movieList: [],
    top: []
  },
  getters: {
    'done_movie_list': state => state.movieList,
    'done_movie_top': state => state.top
  },
  actions: {
    'fetch_movie_list' ({commit}, params) {
      return new Promise((resolve, reject) => {
        axios
        .get('api/movie/in_theaters', {...params})
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
        .get('api/movie/top250', {...params})
        .then((res) => {
          commit('toggle_movie_top', res.subjects)
          resolve({
            start: res.start,
            count: res.count
          })
        })
        .catch(err => console.log(err))
      })
    }
  },
  mutations: {
    'toggle_movie_list' (state, res) {
      state.movieList = res
    },
    'toggle_movie_top' (state, res) {
      state.top = res
    }
  }
}
export default Movie
