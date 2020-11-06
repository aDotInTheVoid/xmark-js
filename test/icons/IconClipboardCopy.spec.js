import { mount } from '@vue/test-utils'
import IconClipboardCopy from '@/components/global/icons/IconClipboardCopy.vue'

describe('IconClipboardCopy.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconClipboardCopy)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
