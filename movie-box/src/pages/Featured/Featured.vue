<template src="./featured.template.html" />
<style src="./featured.style.css" scoped></style>
<script>
/* eslint-disable no-unused-vars */
import { ref, onMounted, defineComponent } from 'vue'
import GlobalConfig from '../../moviebox.config.json'
import MovieBlock from '../../components/MovieBlock/MovieBlock.vue'

/**
 * Featured page for the MovieBox app
 * 
 * The page shows featured movies from the application. 
 * The featured movies list is specified in the global config file.
 */
export default defineComponent({
  name: 'Featured',
  components: {
    MovieBlock
  },
  setup(props, { emit }) {
    // State
    const movies = ref([])

    /**
     * Initialize the featured movies by getting id's from global config
     */
    onMounted(() => {
      movies.value = GlobalConfig.featuredMovies
      emit('featurePageLoaded')
    })

    return {
      movies
    }
  }
})
</script>
