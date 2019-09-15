import axios from 'axios'
import MovieBlock from '../../components/MovieBlock'
import GlobalConfig from '../../moviebox.config.json'

export default {
  name: 'Search',
  components: {
    MovieBlock,
  },
  props: {
  },
  data() {
    return {
      searchString: '',
      errFeedback: '',
      shortPlot: false,
      filteredIds: [],
      loading: false
    }
  },
  mounted() {
    this.$emit('searchPageLoaded');
  },
  watch: {
    searchString: function(val){
      if(!val){
        this.errFeedback = "";
      }
    }
  },
  methods: {
    searchMovie(){
      this.loading = true;
      this.filteredIds.splice(0, this.filteredIds.length);
      axios.get(GlobalConfig.server + "/?s=" + this.searchString + this.getPlotType() + GlobalConfig.apiKey)
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
    onEnter(){
      if(this.searchString.trim()){
        this.searchMovie();
      }
    },
    getPlotType(){
      return this.shortPlot ? "&plot=short" : "";
    },
    resetSearch(){
      this.searchString = "";
    }
  },
  computed:{
     
  }
}