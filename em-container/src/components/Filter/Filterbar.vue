<template>
    <div class="bg-white rounded-lg shadow p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">

            <!-- Venue Type -->
            <div class="relative">
                <label class="block text-xs text-gray-500 mb-1">Venue Type</label>

                <button @click="toggleDropdown('venueType')"
                    class="w-full text-left px-3 py-2 border border-gray-300 rounded-md bg-white flex justify-between items-center">
                    <span>{{ filters.venueType }}</span>
                    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <div v-if="openDropdown === 'venueType'"
                    class="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
                    <div v-for="option in venueTypeOptions" :key="option" @click="selectOption('venueType', option)"
                        class="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                        :class="{ 'bg-gray-50 font-medium': filters.venueType === option }">
                        {{ option }}
                    </div>
                </div>
            </div>

            <!-- Location -->
            <div>
                <label class="block text-xs text-gray-500 mb-1">Location</label>
                <input type="text" v-model="filters.location" placeholder="Enter location"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>

            <!-- City -->
            <div class="relative">
                <label class="block text-xs text-gray-500 mb-1">City</label>

                <button @click="toggleDropdown('city')"
                    class="w-full text-left px-3 py-2 border border-gray-300 rounded-md bg-white flex justify-between items-center">
                    <span>{{ filters.city }}</span>
                    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <div v-if="openDropdown === 'city'"
                    class="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
                    <div v-for="option in cityOptions" :key="option" @click="selectOption('city', option)"
                        class="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                        :class="{ 'bg-gray-50 font-medium': filters.city === option }">
                        {{ option }}
                    </div>
                </div>
            </div>

            <!-- Price Range -->
            <RangeFilter label="Price Range" :min="0" :max="100000" @apply="handlePriceRange" />

            <!-- Advanced Filters -->
            <div class="relative">
                <label class="block text-xs text-gray-500 mb-1">&nbsp;</label>

                <button @click="toggleDropdown('filters')"
                    class="w-full text-left px-3 py-2 border border-gray-300 rounded-md bg-white flex justify-between items-center">
                    <span>Filters</span>
                    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <AdvancedFilters v-show="openDropdown === 'filters'" v-model="filters" />
            </div>
            <div class="flex gap-2 pt-2">
                <button @click="applyAllFilters"
                    class="flex-1 bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700">
                    Apply
                </button>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, toRef } from 'vue'
import { CITIES, VENUE_TYPES } from '@/constants/FilterBarConstants'
import AdvancedFilters from './AdvancedFilter.vue'
import RangeFilter from './RangeFilter.vue'

const openDropdown = ref<string | null>(null)

const venueTypeOptions = VENUE_TYPES
const cityOptions = CITIES

const filters = reactive({
    venueType: 'All',
    location: '',
    city: 'All',
    priceRange: {
        min: 0,
        max: 1000000
    },
    staff: [] as string[],
    cancellation: [] as string[],
    parking: false,
    wheelchair: false
})


const toggleDropdown = (dropdown: string) => {
    openDropdown.value = openDropdown.value === dropdown ? null : dropdown
}

const selectOption = (type: 'venueType' | 'city', value: string) => {
    filters[type] = value
    openDropdown.value = null
}

const handlePriceRange = (range: { min: number | null; max: number | null }) => {
    filters.priceRange = range
    console.log('Price Range Applied:', range)
}

const applyAllFilters = () => {
    console.log('Applying Filters:', toRef(filters).value)
    console.log(`venueType: ${filters.venueType}, location: ${filters.location}, city: ${filters.city}, priceRange: ${JSON.stringify(filters.priceRange)}, staff: ${filters.staff}, cancellation: ${filters.cancellation}, parking: ${filters.parking}, wheelchair: ${filters.wheelchair}`)
    // Here you would typically emit an event or call a method to fetch data based on the filters
}
</script>