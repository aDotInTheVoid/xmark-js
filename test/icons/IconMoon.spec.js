import { mount } from '@vue/test-utils'
import IconMoon from '@/components/global/icons/IconMoon.vue'

describe('IconMoon.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconMoon)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
