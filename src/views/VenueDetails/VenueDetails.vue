<template>
    <div class="max-w-7xl mx-auto px-6 py-6">

        <!-- Breadcrumb -->
        <div class="text-sm text-gray-500 mb-6">
            Home > Wedding Venues > Edge by Hanif Rajput
        </div>

        <!-- Tabs -->
        <div class="flex gap-10 border-b mb-6">
            <button v-for="tab in tabs" :key="tab" @click="activeTab = tab" class="pb-3 text-lg"
                :class="activeTab === tab ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-500'">
                {{ tab }}
            </button>
        </div>

        <div class="grid lg:grid-cols-2 gap-10">

            <!-- LEFT CONTENT -->
            <BasicDetails v-if="activeTab === 'Details'" :venueDetails="venueDetails" />
            <VenuePricing v-if="activeTab === 'Pricing'" />
            <VenueLocation v-if="activeTab === 'Location'" :location="{
                lat: 33.6844,
                lng: 73.0479,
                address: 'Marquees Complex (PSO), Expressway, Islamabad'
            }" />
            <VenueReviews :reviews="venueDetails.reviews" v-if="activeTab === 'Reviews'" />

            <!-- RIGHT SIDE -->
            <div>

                <!-- Image Gallery -->
                <div class="border rounded-lg p-2">

                    <img v-if="venueDetails.images && venueDetails.images.length" :src="venueDetails.images[0]"
                        alt="Venue Image" class="rounded-md mb-2 w-full h-60 object-cover" />

                    <div class="grid grid-cols-3 gap-2">

                        <img v-for="i in 3" :key="i" src="https://images.unsplash.com/photo-1519741497674-611481863552"
                            class="rounded-md h-28 w-full object-cover" />

                    </div>

                </div>

                <!-- Buttons -->
                <div class="flex gap-4 mt-4">

                    <button class="border border-red-500 text-red-500 px-6 py-2 rounded-full">
                        Send Message
                    </button>

                    <button class="bg-red-500 text-white px-6 py-2 rounded-full">
                        Book Now
                    </button>

                </div>

                <!-- Price -->
                <div class="mt-6 text-right">
                    <p class="text-red-500 text-lg font-semibold">Price Range</p>

                    <p class="text-3xl font-bold">
                        PKR {{ venueDetails.price }} - PKR {{ venueDetails.price + 50000 }}
                    </p>

                    <p class="mt-3 text-gray-500 italic bg-gray-100 inline-block px-4 py-2 rounded">
                        Mention Shadiyana to get a good deal
                    </p>

                </div>

            </div>

        </div>

    </div>
</template>

<script setup>
import { ref } from "vue"
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import BasicDetails from "./BasicDetails.vue";
import VenuePricing from "./VenuePricing.vue";
import VenueLocation from "./VenueLocation.vue";
import VenueReviews from "./VenueReviews.vue";


const tabs = ["Details", "Pricing", "Location", "Reviews"]
const activeTab = ref("Details")

const store = useStore();

onMounted(() => {
    store.dispatch('venues/loadVenueDetails', { venueId: 1 }); // Calls your loadVenueDetails action
});

const venueDetails = computed(() => {
    console.log('venue details:', store.getters['venues/venueDetails']);
    return store.getters['venues/venueDetails']
});
</script>