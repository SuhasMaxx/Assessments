import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Search from '@/pages/Search/Search.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

describe('Search.vue', () => {
  it('renders search option', () => {
    const wrapper = mount(Search)
    expect(wrapper.contains('.search-option')).toBe(true);
  })

  it('renders movie Title when passed movie id, shortPlot and featureMode', () => {
    /* const wrapper = mount(Search) */
    //expect(wrapper.contains('.movie-title')).toBe(true);
  })
})
