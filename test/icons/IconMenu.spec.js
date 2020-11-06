import { mount } from '@vue/test-utils'
import IconMenu from '@/components/global/icons/IconMenu.vue'

describe('IconMenu.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconMenu)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
