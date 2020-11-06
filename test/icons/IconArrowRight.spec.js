import { mount } from '@vue/test-utils'
import IconArrowRight from '@/components/global/icons/IconArrowRight.vue'

describe('IconArrowRight.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconArrowRight)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
