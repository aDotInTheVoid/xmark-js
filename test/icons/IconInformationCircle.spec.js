import { mount } from '@vue/test-utils'
import IconInformationCircle from '@/components/global/icons/IconInformationCircle.vue'

describe('IconInformationCircle.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconInformationCircle)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
