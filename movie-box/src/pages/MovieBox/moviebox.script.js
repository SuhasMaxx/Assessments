/* import { StringDecoder } from 'string_decoder'; */
export default {
  name: 'MovieBox',
  props: {
  },
  data() {
    return {
      selectedMode: 'Search',
    }
  },
  mounted() {
    //console.log(this.$route.query.test);
  },

  methods: {
    selected(mode) {
      this.selectedMode = mode;
    }
  },
  computed:{
      isSearchMode(){
          return this.selectedMode == "Search";
      },
      isFeatureMode(){
          return this.selectedMode == "Featured";
      }
  }
}