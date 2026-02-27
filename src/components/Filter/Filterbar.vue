<template>
    <div class="bg-white rounded-lg shadow p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">

            <!-- Purpose Dropdown -->
            <div class="relative">
                <label class="block text-xs text-gray-500 mb-1">Venue Type</label>
                <button @click="toggleDropdown('venueType')"
                    class="w-full text-left px-3 py-2 border border-gray-300 rounded-md bg-white flex justify-between items-center">
                    <span>{{ selectedVenueType }}</span>
                    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <!-- Purpose Dropdown Menu -->
                <div v-if="openDropdown === 'venueType'"
                    class="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
                    <div v-for="option in venueTypeOption" :key="option" @click="selectOption('venueType', option)"
                        class="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                        :class="{ 'bg-gray-50 font-medium': selectedVenueType === option }">
                        {{ option }}
                    </div>
                </div>
            </div>

            <!-- Location Input -->
            <div>
                <label class="block text-xs text-gray-500 mb-1">Location</label>
                <input type="text" v-model="location" placeholder="Enter location"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
            </div>

            <!-- Property Type Dropdown -->
            <div class="relative">
                <label class="block text-xs text-gray-500 mb-1">Property Type</label>
                <button @click="toggleDropdown('city')"
                    class="w-full text-left px-3 py-2 border border-gray-300 rounded-md bg-white flex justify-between items-center">
                    <span>{{ selectedCity }}</span>
                    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <!-- Property Type Dropdown Menu -->
                <div v-if="openDropdown === 'city'"
                    class="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
                    <div v-for="option in citiesOption" :key="option" @click="selectOption('city', option)"
                        class="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                        :class="{ 'bg-gray-50 font-medium': selectedCity === option }">
                        {{ option }}
                    </div>
                </div>
            </div>

            <!-- Price Range Dropdown -->
            <RangeFilter label="Price Range" :min="0" :max="100000" @apply="handlePriceRange" />

            <!-- Price Range Dropdown -->
            <RangeFilter label="Price 2 Range" :min="0" :max="100000" @apply="handlePriceRange" />

            <!-- Filters Button -->
            <div class="relative">
                <label class="block text-xs text-gray-500 mb-1">&nbsp;</label>
                <button @click="toggleDropdown('filters')"
                    class="w-full text-left px-3 py-2 border border-gray-300 rounded-md bg-white flex justify-between items-center">
                    <span>Filters</span>
                    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <!-- Additional Filters Dropdown -->
                <div v-if="openDropdown === 'filters'"
                    class="absolute right-0 mt-1 w-72 bg-white border border-gray-200 rounded-md shadow-lg z-20 p-4">
                    <div class="space-y-4">
                        <!-- Baths -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Baths</label>
                            <div class="flex gap-2 flex-wrap">
                                <button v-for="num in [1, 2, 3, 4, 5]" :key="num"
                                    @click="selectedBaths = selectedBaths === num ? null : num"
                                    class="px-3 py-1 border rounded-md text-sm"
                                    :class="selectedBaths === num ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 hover:bg-gray-50'">
                                    {{ num }}+
                                </button>
                            </div>
                        </div>

                        <!-- Area/Size -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Area / Size (sqft)</label>
                            <div class="flex gap-2">
                                <input type="number" v-model="minArea" placeholder="Min"
                                    class="w-1/2 px-3 py-2 border border-gray-300 rounded-md text-sm">
                                <input type="number" v-model="maxArea" placeholder="Max"
                                    class="w-1/2 px-3 py-2 border border-gray-300 rounded-md text-sm">
                            </div>
                        </div>

                        <!-- Apply Button -->
                        <button @click="applyFilters"
                            class="w-full bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700 mt-2">
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CITIES, VENUE_TYPES } from '@/constants/FilterBarConstants'
import { ref } from 'vue'
import RangeFilter from './RangeFilter.vue'

// Dropdown state
const openDropdown = ref(null)

// Options
const venueTypeOption = VENUE_TYPES
const citiesOption = CITIES
const bedsOptions = ['Any', '1+', '2+', '3+', '4+', '5+']

// Selected values
const selectedCity = ref('All')
const selectedBeds = ref('Any')
const selectedVenueType = ref('All') // Default to first venue type
const selectedPriceRange = ref('Any')

// Location
const location = ref('')

// Price range
const minPrice = ref('')
const maxPrice = ref('')

// Price range
const minGuests = ref('')
const maxGuests = ref('')

// Additional filters
const selectedBaths = ref(null)
const minArea = ref('')
const maxArea = ref('')

// Toggle dropdown
const toggleDropdown = (dropdown) => {
    openDropdown.value = openDropdown.value === dropdown ? null : dropdown
}

const handlePriceRange = (range: { min: number | null; max: number | null }) => {
    console.log('Selected price range:', range)
}

// Select option
const selectOption = (type, value) => {
    if (type === 'venueType') selectedVenueType.value = value
    if (type === 'city') selectedCity.value = value
    if (type === 'beds') selectedBeds.value = value
    openDropdown.value = null
}

// Price range functions
const applyPriceRange = () => {
    if (minPrice.value && maxPrice.value) {
        selectedPriceRange.value = `${minPrice.value} - ${maxPrice.value} AED`
    } else if (minPrice.value) {
        selectedPriceRange.value = `From ${minPrice.value} AED`
    } else if (maxPrice.value) {
        selectedPriceRange.value = `Up to ${maxPrice.value} AED`
    } else {
        selectedPriceRange.value = 'Any'
    }
    openDropdown.value = null
}

const clearPriceRange = () => {
    minPrice.value = ''
    maxPrice.value = ''
    selectedPriceRange.value = 'Any'
    openDropdown.value = null
}

// Apply all filters
const applyFilters = () => {
    // Handle filter application logic here
    console.log('Filters applied:', {
        venueType: selectedVenueType.value,
        location: location.value,
        city: selectedCity.value,
        priceRange: { min: minPrice.value, max: maxPrice.value },
        beds: selectedBeds.value,
        baths: selectedBaths.value,
        area: { min: minArea.value, max: maxArea.value }
    })
    openDropdown.value = null
}

// Close dropdown when clicking outside
if (typeof window !== 'undefined') {
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.relative')) {
            openDropdown.value = null
        }
    })
}
</script>

<style scoped>
/* Custom scrollbar for dropdowns */
.overflow-y-auto::-webkit-scrollbar {
    width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>