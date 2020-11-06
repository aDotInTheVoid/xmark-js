import { mount } from '@vue/test-utils'
import IconSun from '@/components/global/icons/IconSun.vue'

describe('IconSun.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconSun)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
