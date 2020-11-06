import { mount } from '@vue/test-utils'
import IconBadgeCheck from '@/components/global/icons/IconBadgeCheck.vue'

describe('IconBadgeCheck.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconBadgeCheck)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
