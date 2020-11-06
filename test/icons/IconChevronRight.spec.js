import { mount } from '@vue/test-utils'
import IconChevronRight from '@/components/global/icons/IconChevronRight.vue'

describe('IconChevronRight.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconChevronRight)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
