<script setup>
import AllServiceSection from './AllServiceSection.vue';
import HomeSearchBanner from '@/components/banners/HomeSearchBanner.vue';
import Deals from './Deals.vue';

const deals = [
    {
        image: '/images/car-rental.jpeg',
        price: 'Pkr 350,000',
        discount: 2,
        till: "15th November 2026",
        location: 'Grande, Opera District, Downtown Dubai',
    },
    {
        image: '/images/catering.jpeg',
        price: 'Pkr 800,000',
        discount: 4,
        till: "15th November 2026",
        location: 'Palazzo Versace, Culture Village',
    },
    {
        image: '/images/decoration.jpeg',
        price: 'Pkr 100,000',
        discount: 2,
        till: "15th November 2026",
        location: 'Residences 3, Expo Village',
    },
    {
        image: '/images/henna.jpeg',
        price: 'Pkr 240,000',
        discount: 2,
        till: "15th November 2026",
        location: 'Canal Front Residences',
    },
    {
        image: '/images/photographer.jpeg',
        price: 'Pkr 55,000',
        discount: 1,
        till: "15th November 2026",
        location: 'Rukan Tower, Dubailand',
    },
]
</script>

<template>
    <HomeSearchBanner />
    <AllServiceSection />
    <Deals :deals="deals" title="Popular Wedding Deals" />
    <Deals :deals="deals" title="Popular Photography Deals" />
    <Deals :deals="deals" title="Popular Catering Deals" />
</template>
