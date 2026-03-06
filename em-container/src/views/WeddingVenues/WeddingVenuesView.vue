<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import ListingCard from '@/components/Cards/BaseListingCard.vue';
import ImageCarousel from '@/components/carousel/ImageCarousel.vue';
import Filterbar from '@/components/Filter/Filterbar.vue';
import TotalAdsSection from './TotalAdsSection.vue';

const store = useStore();

onMounted(() => {
    store.dispatch('venues/loadProducts'); // Calls your loadProducts action
});

const venues = computed(() => {
    console.log('total venue ads are', totalVenueAds.value, venues.value);
    return store.getters['venues/venues']
});
const totalVenueAds = computed(() => store.getters['venues/totalVenues']);



const handleSearch = (filters: any) => {
    console.log("Selected filters:", filters);
};
</script>

<template>

    <div class="max-w-6xl mx-auto py-16 space-y-8">
        <Filterbar @search="handleSearch" />
        <TotalAdsSection city="Karachi" ad-type="Venues" :total-ads="totalVenueAds" />
        <ListingCard v-for="venue in venues" :key="venue.id">

            <!-- IMAGE -->
            <template #image>
                <ImageCarousel :images="venue.images" />
            </template>

            <!-- PRICE -->
            <template #title>
                <h2 class="text-xl font-bold">
                    {{ venue.type }} ({{ venue.venueType }})
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
                    📍 {{ venue.city }}
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
