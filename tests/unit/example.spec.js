import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it('renders three h3 titles', () => {
    const msg = ''
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.findAll('h3').length).toBe(3)
  })

  it('renders h3 with correct titles', () => {
    const msg = ''
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.findAll('h3').at(0).text()).toBe('Installed CLI Plugins')
    expect(wrapper.findAll('h3').at(1).text()).toBe('Essential Links')
    expect(wrapper.findAll('h3').at(2).text()).toBe('Ecosystem')
  })
})
