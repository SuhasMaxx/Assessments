<template src="./moviebox.template.html" />
<style src="./moviebox.style.css" scoped></style>
<script>
/* eslint-disable no-unused-vars */
import { ref, computed, defineComponent } from 'vue'

/**
 * MovieBox homepage component
 * The Application basically shows the top 5 movies from user search query, using OMDB API ( http://www.omdbapi.com ).
 * The homepage has 2 sections, Search and Featured
 * Search page is searching section for movies and Featured page shows information of predefined 2 featured movies.
 */
export default defineComponent({
  name: 'MovieBox',
  setup() {
    // State
    const selectedMode = ref('Search')

    /**
     * Defines whether page is in Search mode
     */
    const isSearchMode = computed(() => selectedMode.value === 'Search')

    /**
     * Defines whether page is in Featured mode
     */
    const isFeatureMode = computed(() => selectedMode.value === 'Featured')

    /**
     * Called when user either clicks on Search or Featured option on the page
     * @param {String} mode defines whether mode is "Search" or "Featured"
     */
    const selected = (mode) => {
      selectedMode.value = mode
    }

    return {
      selectedMode,
      isSearchMode,
      isFeatureMode,
      selected
    }
  }
})
</script>
