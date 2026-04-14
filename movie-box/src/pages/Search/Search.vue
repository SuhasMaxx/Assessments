<template src="./search.template.html" />
<style src="./search.style.css" scoped></style>
<script>
/* eslint-disable no-unused-vars */
import { ref, watch, onMounted, defineComponent } from 'vue'
import axios from 'axios'
import MovieBlock from '../../components/MovieBlock/MovieBlock.vue'
import GlobalConfig from '../../moviebox.config.json'

/**
 * Search page for the MovieBox app
 * 
 * The page has search input where user can add query and click on Search button, 
 * which will display top 5 results of movies ( or less ). 
 * The movie details includes poster, title, actors, director etc information. 
 * There is also switch to see the plot of the movie to short / long.
 */
export default defineComponent({
  name: 'Search',
  components: {
    MovieBlock
  },
  setup(props, { emit }) {
    // State
    const searchString = ref('')
    const errFeedback = ref('')
    const shortPlot = ref(false)
    const filteredIds = ref([])
    const loading = ref(false)

    // Watch searchString to clear error feedback
    watch(searchString, (val) => {
      if (!val) {
        errFeedback.value = ''
      }
    })

    /**
     * Search function which calls the Search API passing user entered string. 
     * The response will be array of id's of movies.
     */
    const searchMovie = () => {
      loading.value = true
      filteredIds.value = []
      axios.get(GlobalConfig.server + '/?s=' + searchString.value + GlobalConfig.apiKey)
        .then((response) => {
          loading.value = false
          if (response.data.Response === 'False') {
            errFeedback.value = response.data.Error
          } else {
            errFeedback.value = ''
            if (response.data.Search.length === 1) {
              filteredIds.value.push(response.data.Search[response.data.Search.length - 1].imdbID)
            } else {
              response.data.Search.slice(1, response.data.Search.length >= 5 ? 6 : response.data.Search.length)
                .forEach(element => {
                  filteredIds.value.push(element.imdbID)
                })
            }
          }
        })
        .catch(() => {
          loading.value = false
          errFeedback.value = 'Something went wrong !! Try again.'
        })
    }

    /**
     * Calls search function if user has entered a valid string
     */
    const onEnter = () => {
      if (searchString.value.trim()) {
        searchMovie()
      }
    }

    /**
     * Resets the search string to blank
     */
    const resetSearch = () => {
      searchString.value = ''
    }

    /**
     * Initialize on mount
     */
    onMounted(() => {
      emit('searchPageLoaded')
    })

    return {
      searchString,
      errFeedback,
      shortPlot,
      filteredIds,
      loading,
      searchMovie,
      onEnter,
      resetSearch
    }
  }
})
</script>

