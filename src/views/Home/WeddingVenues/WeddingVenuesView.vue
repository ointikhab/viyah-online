<script setup lang="ts">
import ListingCard from '@/components/Cards/BaseListingCard.vue';
import ImageCarousel from '@/components/carousel/ImageCarousel.vue';
import Filterbar from '@/components/Filter/Filterbar.vue';

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
        ]
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
        ]
    }
]
const handleSearch = (filters: any) => {
    console.log("Selected filters:", filters);
};
</script>

<template>

    <div class="max-w-6xl mx-auto py-16 space-y-8">
        <Filterbar @search="handleSearch" />
        <ListingCard v-for="venue in venues" :key="venue.id">

            <!-- IMAGE -->
            <template #image>
                <ImageCarousel :images="venue.images" />
            </template>

            <!-- PRICE -->
            <template #price>
                <h2 class="text-xl font-bold">
                    {{ venue.price }}
                </h2>
            </template>

            <!-- BADGE -->
            <template #badge>
                <span class="bg-pink-100 text-pink-600 px-2 py-1 rounded text-xs">
                    FEATURED
                </span>
            </template>

            <!-- TITLE -->
            <template #title>
                <p class="font-medium mt-1">
                    {{ venue.type }}
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
