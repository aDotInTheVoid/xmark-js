import { mount } from '@vue/test-utils'
import IconExclamationCircle from '@/components/global/icons/IconExclamationCircle.vue'

describe('IconExclamationCircle.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconExclamationCircle)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
