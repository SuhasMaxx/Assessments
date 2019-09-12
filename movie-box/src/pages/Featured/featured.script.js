import GlobalConfig from '../../moviebox.config.json'
import MovieBlock from '../../components/MovieBlock'

export default {
  name: 'Featured',
  components: {
    MovieBlock
  },
  props: {
    
  },
  data() {
    return {
      movies:[]
    }
  },
  mounted() {
    this.movies = GlobalConfig.featuredMovies;
    this.$emit('featurePageLoaded');
  },

  methods: {
    
  },
  computed:{
     
  }
}