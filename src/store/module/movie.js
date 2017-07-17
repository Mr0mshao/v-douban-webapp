import axios from '../../utils/fetch'
const Movie = {
  state: {
    movieList: []
  },
  getters: {
    'done_movie_list': state => state.movieList
  },
  actions: {
    'fetch_movie_list' ({commit}) {
      axios
        .get('api/movie/in_theaters')
        .then((res) => {})
        .catch((err) => { console.log(err) })
    }
  },
  mutations: {}
}
export default Movie
