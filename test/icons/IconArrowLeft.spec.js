import { mount } from '@vue/test-utils'
import IconArrowLeft from '@/components/global/icons/IconArrowLeft.vue'

describe('IconArrowLeft.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconArrowLeft)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
