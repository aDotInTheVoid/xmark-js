import { mount } from '@vue/test-utils'
import IconCheckCircle from '@/components/global/icons/IconCheckCircle.vue'

describe('IconCheckCircle.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconCheckCircle)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
