<template src="./movieblock.template.html" />
<style src="./movieblock.style.css" scoped></style>
<script>
import axios from 'axios'

/**
 * Movie card that displays movei information like Poster, Title, Directors, Actors etc.
 * The information is fetched from online API using OMDB id of the movie
 */
export default {
  name: 'MovieBlock',
  components: {
  },
  props:{
    /**
     * OMDB id of the movie
     */
    movieId: String,

    /**
     * Boolean that defines whether to fetch Short of Full plot forthe requested movie
     */
    shortPlot: Boolean,

    /**
     * This mode is used on Featured Page
     */
    featureMode: Boolean
  },
  data() {
    return {

      /**
       * Information fetched from API is stored in this object
       */
        movieData: {
        },

        /**
         * This boolean sets the "show more" property for plot to view limited text in plot or complete plot
         */
        moreShown: false,

        /**
         * Hide or show the loading spinner
         */
        loading: true
    }
  },
  filters: {
    /**
     * This filter makes fist letter of the word to Capital
     * @param {String} value text which needs to be Capitalized
     */
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  mounted(){
    this.getData();
  },
  computed:{
    /**
     * Returns true if Plot is bigger than 200 characters.
     */
    isPlotBig(){
      if(this.movieData.Plot && this.movieData.Plot.length > 200){
        return true;
      } else {
        return false;
      }
    },

    /**
     * Process comma seperated values of name of actors to the array of names. 
     */
    actorsList(){
      var valueList = [];
      if(this.movieData.Actors){
        if(this.movieData.Actors.indexOf(',') >= 0){
          valueList = this.movieData.Actors.split(',');
        } else {
          valueList = [this.movieData.Actors]
        }
      }
      return valueList;
    }
  },
  methods:{
    
    /**
     * Make API request to the OMDB API to get rhe data for movie by passing OMDB movie id as parameter.
     */
    getData(){
        this.loading = true;
        axios.get('http://www.omdbapi.com/?i='+ this.movieId + this.getPlotType() +'&plot=full&apikey=PlzBanM3')
        .then((response) => {
          this.movieData = response.data;
          if(this.movieData.Plot.length > 200){
            this.movieData.lessPlot = this.movieData.Plot.slice(0,200);
            this.movieData.morePlot = this.movieData.Plot.slice(200,this.movieData.Plot.length - 1);
          }
          this.loading = false;
        }).catch(() => {
          // console.log(error);
        });
    },

    /**
     * Build the URL parameter for short or full based on user choice on the UI
     */
    getPlotType(){
      return this.shortPlot ? "&plot=short" : "";
    },

    /**
     * Toggles display of plot as full or shortened basically switching between "Show more" & "show less"
     */
    toggleMore(){
      this.moreShown = !this.moreShown;
    }
  }
}
</script>
