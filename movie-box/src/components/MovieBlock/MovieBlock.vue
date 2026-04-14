<template src="./movieblock.template.html"></template>
<style src="./movieblock.style.css" scoped></style>
<script>
/* eslint-disable no-unused-vars */
import { ref, computed, onMounted, defineComponent } from 'vue'
import axios from 'axios'
import GlobalConfig from '../../moviebox.config.json'

/**
 * Movie card that displays movie information like Poster, Title, Directors, Actors etc.
 * The information is fetched from online API using OMDB id of the movie
 */
export default defineComponent({
  name: 'MovieBlock',
  props: {
    /**
     * OMDB id of the movie
     */
    movieId: String,

    /**
     * Boolean that defines whether to fetch Short or Full plot for the requested movie
     */
    shortPlot: Boolean,

    /**
     * This mode is used on Featured Page
     */
    featureMode: Boolean
  },
  setup(props) {
    // State
    const movieData = ref({})
    const moreShown = ref(false)
    const loading = ref(true)

    /**
     * Returns true if Plot is bigger than 200 characters.
     */
    const isPlotBig = computed(() => {
      if (movieData.value.Plot && movieData.value.Plot.length > 200) {
        return true
      }
      return false
    })

    /**
     * Process comma separated values of name of actors to the array of names.
     */
    const actorsList = computed(() => {
      const valueList = []
      if (movieData.value.Actors) {
        if (movieData.value.Actors.indexOf(',') >= 0) {
          return movieData.value.Actors.split(',')
        } else {
          return [movieData.value.Actors]
        }
      }
      return valueList
    })

    /**
     * Build the URL parameter for short or full based on user choice on the UI
     */
    const getPlotType = () => {
      return props.shortPlot ? '&plot=short' : '&plot=full'
    }

    /**
     * Make API request to the OMDB API to get the data for movie by passing OMDB movie id as parameter.
     */
    const getData = () => {
      loading.value = true
      axios.get('http://www.omdbapi.com/?i=' + props.movieId + getPlotType() + GlobalConfig.apiKey)
        .then((response) => {
          movieData.value = response.data
          if (movieData.value.Plot && movieData.value.Plot.length > 200) {
            movieData.value.lessPlot = movieData.value.Plot.slice(0, 200)
            movieData.value.morePlot = movieData.value.Plot.slice(200, movieData.value.Plot.length - 1)
          }
          loading.value = false
        })
        .catch(() => {
          loading.value = false
        })
    }

    /**
     * Toggles display of plot as full or shortened basically switching between "Show more" & "show less"
     */
    const toggleMore = () => {
      moreShown.value = !moreShown.value
    }

    /**
     * Capitalize filter function
     */
    const capitalize = (value) => {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }

    /**
     * Lifecycle hook
     */
    onMounted(() => {
      getData()
    })

    return {
      movieData,
      moreShown,
      loading,
      isPlotBig,
      actorsList,
      getPlotType,
      getData,
      toggleMore,
      capitalize
    }
  }
})
</script>
