<template src="./search.template.html" />
<style src="./search.style.css" scoped></style>
<script>
import axios from 'axios'
import MovieBlock from '../../components/MovieBlock/MovieBlock.vue'
import GlobalConfig from '../../moviebox.config.json'

/**
 * Search page for the MovieBox app
 * 
 * The page has search input where user can add query and click on Search button, which will display top 5 results of movies ( or less ). 
 * The movie details includes poster, title, actors, director etc information. There is also switch to se the plot of the movie to short / long.
 */
export default {
  name: 'Search',
  components: {
    MovieBlock,
  },
  props: {
  },
  /**
   * Initializing properties for the Search feature
   */
  data() {
    return {
      /**
       * Search string which will be eneterd by user
       */
      searchString: '',
      /**
       * The feedback from API in error state
       */
      errFeedback: '',
      /**
       * The boolean that defines whether plot for requested mvies should be short or Full
       */
      shortPlot: false,
      /**
       * The array that will contain top 5 results from the search query
       */
      filteredIds: [],
      /**
       * Boolean that will be set when application is making call to API. This will set the visibility of the loader spinner
       */
      loading: false
    }
  },
  mounted() {
    this.$emit('searchPageLoaded');
  },
  /**
   * Watching the search string from user to clear the "No movie found" error message when user clears the input field
   */
  watch: {
    searchString: function(val){
      if(!val){
        this.errFeedback = "";
      }
    }
  },
  methods: {
    /**
     * Search function which calls the Search API passing use entered string. The response will be array of id's of movies.
     */
    searchMovie(){
      this.loading = true;
      this.filteredIds.splice(0, this.filteredIds.length);
      axios.get(GlobalConfig.server + "/?s=" + this.searchString + GlobalConfig.apiKey)
      .then((response) => {
          this.loading = false;
          if(response.data.Response == "False"){
            this.errFeedback = response.data.Error;
          } else {
            this.errFeedback = "";
            if(response.data.Search.length == 1){
              this.filteredIds.push(response.data.Search[response.data.Search.length - 1].imdbID);
            } else {
              response.data.Search.slice(1, response.data.Search.length >= 5 ? 6 : response.data.Search.length)
              .forEach(element => {
                this.filteredIds.push(element.imdbID);
              });
            }
          }
        }).catch(() => {
          this.loading = false;
          this.errFeedback = "Something went wrong !! Try again.";
        });
    },
    /**
     * Calls for search function if user has entered a vallid string
     */
    onEnter(){
      if(this.searchString.trim()){
        this.searchMovie();
      }
    },
    /**
     * Resets the serahc string to blank
     */
    resetSearch(){
      this.searchString = "";
    }
  },
  computed:{
     
  }
}
</script>

