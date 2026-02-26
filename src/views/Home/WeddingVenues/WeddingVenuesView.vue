<script setup lang="ts">
import ListingCard from '@/components/Cards/BaseListingCard.vue';
import ImageCarousel from '@/components/carousel/ImageCarousel.vue';
import Filterbar from '@/components/Filter/Filterbar.vue';
import TotalAdsSection from './TotalAdsSection.vue';

const venues = [
    {
        id: 1,
        price: 'AED 12,000',
        type: 'Beach Venue',
        guests: 300,
        location: 'Palm Jumeirah',
        images: [
            '/images/car-rental.jpeg',
            '/images/photographer.jpeg',
            '/images/decoration.jpeg'
        ],
        rating: 4.5,
        badges: ['FEATURED', '20% OFF'],
        description: 'A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.'
    },
    {
        id: 2,
        price: 'AED 8,500',
        type: 'Banquet Hall',
        guests: 150,
        location: 'Downtown Dubai',
        images: [
            '/images/image.avif',
            '/images/catering.jpeg'
        ],
        rating: 3.5,
        badges: ['FEATURED', '20% OFF'],
        description: 'An elegant banquet hall located in the heart of the city, ideal for hosting a grand wedding reception.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.'

    },
    {
        id: 2,
        price: 'AED 8,500',
        type: 'Banquet Hall',
        guests: 150,
        location: 'Downtown Dubai',
        images: [
            '/images/image.avif',
            '/images/catering.jpeg'
        ],
        rating: 3.5,
        badges: ['FEATURED', '20% OFF'],
        description: 'An elegant banquet hall located in the heart of the city, ideal for hosting a grand wedding reception.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.'

    },
    {
        id: 3,
        price: 'AED 8,500',
        type: 'Banquet Hall',
        guests: 150,
        location: 'Downtown Dubai',
        images: [
            '/images/image.avif',
            '/images/catering.jpeg'
        ],
        rating: 3.5,
        badges: ['FEATURED', '20% OFF'],
        description: 'An elegant banquet hall located in the heart of the city, ideal for hosting a grand wedding reception.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.'

    },
    {
        id: 4,
        price: 'AED 8,500',
        type: 'Banquet Hall',
        guests: 150,
        location: 'Downtown Dubai',
        images: [
            '/images/image.avif',
            '/images/catering.jpeg'
        ],
        rating: 3.5,
        badges: ['FEATURED', '20% OFF'],
        description: 'An elegant banquet hall located in the heart of the city, ideal for hosting a grand wedding reception.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.'

    },
    {
        id: 5,
        price: 'AED 8,500',
        type: 'Banquet Hall',
        guests: 150,
        location: 'Downtown Dubai',
        images: [
            '/images/image.avif',
            '/images/catering.jpeg'
        ],
        rating: 3.5,
        badges: ['FEATURED', '20% OFF'],
        description: 'An elegant banquet hall located in the heart of the city, ideal for hosting a grand wedding reception.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.A beautiful beach venue perfect for a romantic wedding ceremony with stunning views of the sea.'

    }
]
const handleSearch = (filters: any) => {
    console.log("Selected filters:", filters);
};
</script>

<template>

    <div class="max-w-6xl mx-auto py-16 space-y-8">
        <Filterbar @search="handleSearch" />
        <TotalAdsSection :total="120" />
        <ListingCard v-for="venue in venues" :key="venue.id">

            <!-- IMAGE -->
            <template #image>
                <ImageCarousel :images="venue.images" />
            </template>

            <!-- PRICE -->
            <template #title>
                <h2 class="text-xl font-bold">
                    {{ venue.type }}
                </h2>
            </template>

            <!-- BADGE -->
            <template #badge>
                <div class="flex flex-wrap gap-2">
                    <span v-for="badge in venue.badges" :key="badge"
                        class="bg-pink-100 text-pink-600 px-2 py-1 rounded text-xs">
                        {{ badge }}
                    </span>
                </div>
            </template>


            <!-- TITLE -->
            <template #price>
                <p class="font-medium mt-1">
                    {{ venue.price }}
                </p>
            </template>

            <!-- META -->
            <template #meta>
                <p class="text-gray-600 text-sm mt-2">
                    Capacity: {{ venue.guests }} guests
                </p>
            </template>

            <!-- LOCATION -->
            <template #location>
                <p class="text-gray-500 text-sm mt-2">
                    📍 {{ venue.location }}
                </p>
            </template>

            <!-- DESCRIPTION -->
            <template #description>
                <p class="text-gray-600 text-sm mt-1 line-clamp-2">
                    {{ venue.description }}
                </p>
            </template>


            <!-- RATING -->
            <template #rating>
                <div class="flex items-center gap-1">
                    <span v-for="i in 5" :key="i" class="text-lg leading-none" :class="i <= Math.floor(venue.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'">
                        ★
                    </span>

                    <span class="text-sm text-gray-500 ml-2">
                        {{ venue.rating }}
                    </span>
                </div>
            </template>



            <!-- ACTIONS -->
            <template #actions>
                <button class="bg-gray-100 px-3 py-2 rounded">
                    Details
                </button>

                <button class="bg-pink-500 text-white px-3 py-2 rounded">
                    Book Visit
                </button>
            </template>

        </ListingCard>

    </div>

</template>
