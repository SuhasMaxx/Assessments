<template src="./moviebox.template.html" />
<style src="./moviebox.style.css" scoped></style>
<script>
/**
 * MovieBox homepage component
 * The Application basically shows the top 5 movies from user search query, using OMDB API ( http://www.omdbapi.com ). The homepage has 2 sections, Search and Featured
 * Search page is searching section for movies and Featured page shows information of predefined 2 featured movies.
 *
 * @class MovieBox
 */
export default {
  name: 'MovieBox',
  props: {
  },
  /**
   * Sets default page mode to "Search"
   */
  data() {
    return {
      selectedMode: 'Search',
    }
  },
  mounted() {
    //console.log(this.$route.query.test);
  },

  methods: {
    /**
     * Called when user either clicks on Search or Featured option on the page
     * @param {String} mode defines whether mode is "Search" or "Featured"
     */
    selected(mode) {
      this.selectedMode = mode;
    }
  },
  computed:{
    /**
     * Defines whether page is in Search mode
     */
    isSearchMode(){
        return this.selectedMode == "Search";
    },
      /**
     * Defines whether page is in Featured mode
     */
    isFeatureMode(){
        return this.selectedMode == "Featured";
    }
  }
}
</script>
