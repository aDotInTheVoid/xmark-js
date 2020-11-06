import { mount } from '@vue/test-utils'
import IconXCircle from '@/components/global/icons/IconXCircle.vue'

describe('IconXCircle.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconXCircle)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
