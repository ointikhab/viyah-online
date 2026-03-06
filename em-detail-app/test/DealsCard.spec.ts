// test/components/DealCards.spec.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import DealCards from '@/components/Cards/DealCards.vue'

describe('DealCards.vue', () => {
  const dealProps = {
    image: '/images/deal1.jpg',
    title: 'Wedding Venue Deal',
    price: 'AED 500',
    discount: 20,
    till: '15th March 2026',
    location: 'Downtown Dubai',
  }

  it('renders the image with correct src and alt', () => {
    const wrapper = mount(DealCards, { props: dealProps })
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(dealProps.image)
    expect(img.attributes('alt')).toBe(dealProps.title)
  })

  it('renders the price correctly', () => {
    const wrapper = mount(DealCards, { props: dealProps })
    const price = wrapper.find('p.text-red-600')
    expect(price.exists()).toBe(true)
    expect(price.text()).toBe(dealProps.price)
  })

  it('renders the discount and till text correctly', () => {
    const wrapper = mount(DealCards, { props: dealProps })
    const specs = wrapper.find('p.text-gray-800')
    expect(specs.exists()).toBe(true)
    expect(specs.text()).toBe(`${dealProps.discount}% Off • till ${dealProps.till}`)
  })

  it('renders the location correctly', () => {
    const wrapper = mount(DealCards, { props: dealProps })
    const location = wrapper.find('p.text-gray-500')
    expect(location.exists()).toBe(true)
    expect(location.text()).toBe(dealProps.location)
  })
})