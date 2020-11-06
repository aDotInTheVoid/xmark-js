import { mount } from '@vue/test-utils'
import BuiltWithNuxtLight from '@/components/global/icons/BuiltWithNuxtLight.vue'

describe('BuiltWithNuxtLight.vue', () => {
  test('Has an svg', () => {
    const wrapper = mount(BuiltWithNuxtLight)
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
