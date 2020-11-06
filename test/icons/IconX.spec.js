import { mount } from '@vue/test-utils'
import IconX from '@/components/global/icons/IconX.vue'

describe('IconX.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconX)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
