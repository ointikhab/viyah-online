import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeSearchBanner from '../src/components/banners/HomeSearchBanner.vue'

describe('HomeSearchBanner.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders headline text', () => {
    const wrapper = mount(HomeSearchBanner)

    expect(wrapper.text()).toContain(
      'Find Halls, Catering, Decor & More'
    )
  })

  it('renders all categories', () => {
    const wrapper = mount(HomeSearchBanner)

    const categories = [
      'Venues',
      'Photographers',
      'Bridal Makeup',
      'Decor',
      'Catering',
      'Henna',
      'Car Rentals'
    ]

    const buttons = wrapper.findAll('nav button')
    expect(buttons).toHaveLength(categories.length)
  })

  it('has Venues selected by default', () => {
    const wrapper = mount(HomeSearchBanner)

    const firstButton = wrapper.findAll('nav button')[0]
    expect(firstButton.classes()).toContain('bg-red-600')
  })

  it('changes selected category when clicked', async () => {
    const wrapper = mount(HomeSearchBanner)

    const buttons = wrapper.findAll('nav button')
    const decorButton = buttons.find(b => b.text() === 'Decor')!

    await decorButton.trigger('click')

    expect(decorButton.classes()).toContain('bg-red-600')
  })

  it('updates input value when typing', async () => {
    const wrapper = mount(HomeSearchBanner)

    const input = wrapper.find('input[type="search"]')
    await input.setValue('Wedding Hall')

    expect((input.element as HTMLInputElement).value)
      .toBe('Wedding Hall')
  })

  it('calls alert with correct message on submit', async () => {
    const wrapper = mount(HomeSearchBanner)

    const alertMock = vi.spyOn(window, 'alert')
      .mockImplementation(() => {})

    await wrapper.find('input').setValue('Banquet')

    const decorButton = wrapper.findAll('nav button')
      .find(b => b.text() === 'Decor')!

    await decorButton.trigger('click')

    await wrapper.find('form').trigger('submit')

    expect(alertMock).toHaveBeenCalledWith(
      'Search: "Banquet" in category: "Decor"'
    )
  })
})