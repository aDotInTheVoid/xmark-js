import { mount } from '@vue/test-utils'
import IconTranslate from '@/components/global/icons/IconTranslate.vue'

describe('IconTranslate.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconTranslate)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
