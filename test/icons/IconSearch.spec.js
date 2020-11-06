import { mount } from '@vue/test-utils'
import IconSearch from '@/components/global/icons/IconSearch.vue'

describe('IconSearch.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(IconSearch)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
