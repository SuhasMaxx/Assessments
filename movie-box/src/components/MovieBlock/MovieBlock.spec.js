import Vue from 'vue'
import { mount } from '@vue/test-utils'
import MovieBlock from '@/components/MovieBlock/MovieBlock.vue'
import BootstrapVue from 'bootstrap-vue'
import sinon from 'sinon'
import axios from 'axios'

Vue.use(BootstrapVue)

describe('MovieBlock.vue', () => {
  it('renders movie block when passed movie id, shortPlot and featureMode', () => {
    const wrapper = mount(MovieBlock, {
      propsData: { movieId: 'tt2118607',
        shortPlot: true,
        featureMode: true }
    })
    expect(wrapper.contains('div')).toBe(true);
  })

  it('renders movie Title when passed movie id, shortPlot and featureMode', () => {
    const wrapper = mount(MovieBlock, {
      propsData: { movieId: 'tt2118607',
        shortPlot: true,
        featureMode: true }
    })
    expect(wrapper.contains('.movie-title')).toBe(true);
  })

  it('renders movie Title when passed movie id, shortPlot and featureMode', () => {
    const sandbox = sinon.createSandbox();
    const jsData = {
      Title: "Dam Busters: The Race to Smash the German Dams",
      Year: "2011",
      Rated: "N/A",
      Released: "08 Nov 2011",
      Runtime: "59 min",
      Genre: "Documentary",
      Director: "Aaron Young",
      Writer: "James Holland",
      Actors: "James Holland, John Canmore, Daniel Godward, Mackenzie Scott",
      Plot: "James Holland presents an analysis of the legendary 1943 Dam Busters raid.",
      Language: "English",
      Country: "UK",
      Awards: "N/A",
      Poster: "N/A",
      Ratings: [
      {
      Source: "Internet Movie Database",
      Value: "8.5/10"
      }
      ],
      Metascore: "N/A",
      imdbRating: "8.5",
      imdbVotes: "6",
      imdbID: "tt2118607",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "N/A",
      Production: "N/A",
      Website: "N/A",
      Response: "True"
    };
    
    const promise = new Promise( res => {
      res({
        data: jsData
      })
    })

    sandbox.stub(axios, 'get').returns(promise)

    const wrapper = mount(MovieBlock, {
      propsData: { movieId: 'tt2118607',
        shortPlot: true,
        featureMode: true }
    })
    
    const vm = wrapper.vm;
    
    vm.getData();
    
    promise.then(() => {
      expect(vm.movieData.Year).toEqual(jsData.Year);
      /* done() */
    })
    
  })
})
