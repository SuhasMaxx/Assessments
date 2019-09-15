import axios from 'axios'
export default {
  name: 'MovieBlock',
  components: {
  },
  props:{
    movieId: String,
    shortPlot: Boolean,
    featureMode: Boolean
  },
  data() {
    return {
        movieData: {
        },
        moreShown: false,
        loading: true
    }
  },
  filters: {
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
    isPlotBig(){
      if(this.movieData.Plot && this.movieData.Plot.length > 200){
        return true;
      } else {
        return false;
      }
    },
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
    getPlotType(){
      return this.shortPlot ? "&plot=short" : "";
    },
    toggleMore(){
      this.moreShown = !this.moreShown;
    }
  }
}