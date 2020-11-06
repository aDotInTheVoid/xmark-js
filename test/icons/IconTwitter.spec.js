import { mount } from '@vue/test-utils'
import IconTwitter from '@/components/global/icons/IconTwitter.vue'

describe('IconTwitter.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconTwitter)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
