import { mount } from '@vue/test-utils'
import IconGithub from '@/components/global/icons/IconGithub.vue'

describe('IconGithub.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconGithub)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
