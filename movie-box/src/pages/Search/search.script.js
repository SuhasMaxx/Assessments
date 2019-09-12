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
      result: {},
      errFeedback: '',
      shortPlot: false,
      filteredIds: []
    }
  },
  mounted() {
    this.$emit('searchPageLoaded');
  },

  methods: {
    searchMovie(){
      this.filteredIds.splice(0, this.filteredIds.length);
      axios.get(GlobalConfig.server + "/?s=" + this.searchString + this.getPlotType() + GlobalConfig.apiKey)
      .then((response) => {
          if(response.data.Response == "False"){
            this.errFeedback = response.data.Error;
          } else {
            this.errFeedback = "";
            response.data.Search.slice(1, response.data.Search.length >= 5 ? 6 : response.data.Search.length)
            .forEach(element => {
              this.filteredIds.push(element.imdbID);
            });
            this.result = response.data;
          }
        }).catch(() => {
          // console.log(error);
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