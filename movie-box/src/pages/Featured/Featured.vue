<template src="./featured.template.html" />
<style src="./featured.style.css" scoped></style>
<script>
import GlobalConfig from '../../moviebox.config.json'
import MovieBlock from '../../components/MovieBlock/MovieBlock'

/**
 * Featured page for the MovieBox app
 * 
 * The page shows featured movies from the application. The featured movies list is specified in the glocal config file.
 */
export default {
  name: 'Featured',
  components: {
    MovieBlock
  },
  props: {
  },
  /**
   * Initialize empty movie collection
   */
  data() {
    return {
      /**
       * List of movie Id's to be displyed
       */
      movies:[]
    }
  },
  /**
   * Initialize the featured movies by getting id's from global config
   */
  mounted() {
    this.movies = GlobalConfig.featuredMovies;
    this.$emit('featurePageLoaded');
  },

  methods: {
    
  },
  computed:{
     
  }
}
</script>
