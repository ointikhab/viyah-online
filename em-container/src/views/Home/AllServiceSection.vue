<template>
    <section class="relative mt-10">
        <h2 class="text-center text-3xl font-semibold mb-10 text-gray-900">Find services for your every event</h2>
        <CategoryCards :services="services" />
    </section>
</template>

<script setup lang="ts">
import CategoryCards from '@/components/Cards/CategoryCards.vue';

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
</script>
