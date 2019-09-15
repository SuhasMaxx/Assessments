import Vue from 'vue'
import { mount } from '@vue/test-utils'
import MovieBox from '@/pages/MovieBox/MovieBox.vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

Vue.use(BootstrapVue, VueRouter)

describe('MovieBox.vue', () => {
  it('Movie Box has main icon', () => {
    const wrapper = mount(MovieBox)
    expect(wrapper.contains('.main-icon')).toBe(true);
  })

  it('MovieBox has menu bar', () => {
    const wrapper = mount(MovieBox)
    expect(wrapper.contains('.menu-bar')).toBe(true);
  })
})
