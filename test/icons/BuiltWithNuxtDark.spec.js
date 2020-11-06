import { mount } from '@vue/test-utils'
import BuiltWithNuxtDark from '@/components/global/icons/BuiltWithNuxtDark.vue'

describe('BuiltWithNuxtDark.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(BuiltWithNuxtDark)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
