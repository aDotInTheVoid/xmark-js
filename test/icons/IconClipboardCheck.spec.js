import { mount } from '@vue/test-utils'
import IconClipboardCheck from '@/components/global/icons/IconClipboardCheck.vue'

describe('IconClipboardCheck.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconClipboardCheck)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
