// test/components/ServicesGrid.spec.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ServicesGrid from '@/components/Cards/CategoryCards.vue'

describe('ServicesGrid.vue', () => {
  const services = [
    { name: 'Wedding Venues', img: '/images/home-search-banner.jpg' },
    { name: 'Photographers', img: '/images/photographer.jpeg' },
    { name: 'Bridal Makeup', img: '/images/decoration.jpeg' },
    { name: 'Decor', img: '/images/decoration.jpeg' },
    { name: 'Catering', img: '/images/catering.jpeg' },
    { name: 'Henna Artist', img: '/images/henna.jpeg' },
    { name: 'Car Rentals', img: '/images/car-rental.jpeg' },
    { name: 'Wedding Stationery', img: '/images/wedding-stationery.jpeg' },
]

  it('renders the correct number of service cards', () => {
    const wrapper = mount(ServicesGrid, {
      props: { services },
    })

    const cards = wrapper.findAll('div.relative.h-40')
    expect(cards.length).toBe(services.length)
  })

  it('displays the service names correctly', () => {
    const wrapper = mount(ServicesGrid, {
      props: { services },
    })

    services.forEach((service) => {
      expect(wrapper.text()).toContain(service.name)
    })
  })

  it('applies the correct background images', () => {
  const wrapper = mount(ServicesGrid, { props: { services } })

  const cards = wrapper.findAll('div.absolute.inset-0')
  cards.forEach((card, index) => {
    expect(card.attributes('style')).toContain(`url("${services[index].img}")`)
  })
})
})