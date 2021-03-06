import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Featured from '@/pages/Featured/Featured.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

describe('MovieBlock.vue', () => {
  it('renders featured block properly', () => {
    const wrapper = mount(Featured)
    expect(wrapper.contains('div.featured-container')).toBe(true);
  })
})
