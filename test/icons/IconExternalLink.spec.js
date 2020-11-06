import { mount } from '@vue/test-utils'
import IconExternalLink from '@/components/global/icons/IconExternalLink.vue'

describe('IconExternalLink.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconExternalLink)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
