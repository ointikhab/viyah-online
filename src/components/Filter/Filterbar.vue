<template>
    <div class="bg-white rounded-lg shadow p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">

            <!-- Purpose Dropdown -->
            <div class="relative">
                <label class="block text-xs text-gray-500 mb-1">Purpose</label>
                <button @click="toggleDropdown('purpose')"
                    class="w-full text-left px-3 py-2 border border-gray-300 rounded-md bg-white flex justify-between items-center">
                    <span>{{ selectedPurpose }}</span>
                    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <!-- Purpose Dropdown Menu -->
                <div v-if="openDropdown === 'purpose'"
                    class="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
                    <div v-for="option in purposeOptions" :key="option" @click="selectOption('purpose', option)"
                        class="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                        :class="{ 'bg-gray-50 font-medium': selectedPurpose === option }">
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
                <button @click="toggleDropdown('propertyType')"
                    class="w-full text-left px-3 py-2 border border-gray-300 rounded-md bg-white flex justify-between items-center">
                    <span>{{ selectedPropertyType }}</span>
                    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <!-- Property Type Dropdown Menu -->
                <div v-if="openDropdown === 'propertyType'"
                    class="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
                    <div v-for="option in propertyTypeOptions" :key="option"
                        @click="selectOption('propertyType', option)"
                        class="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                        :class="{ 'bg-gray-50 font-medium': selectedPropertyType === option }">
                        {{ option }}
                    </div>
                </div>
            </div>

            <!-- Price Range Dropdown -->
            <div class="relative">
                <label class="block text-xs text-gray-500 mb-1">Price Range</label>
                <button @click="toggleDropdown('priceRange')"
                    class="w-full text-left px-3 py-2 border border-gray-300 rounded-md bg-white flex justify-between items-center">
                    <span>{{ selectedPriceRange }}</span>
                    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <!-- Price Range Dropdown Menu (Custom with min/max inputs) -->
                <div v-if="openDropdown === 'priceRange'"
                    class="absolute left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-20 p-4">
                    <div class="space-y-3">
                        <div>
                            <label class="block text-xs text-gray-500 mb-1">Min Price (AED)</label>
                            <input type="number" v-model="minPrice" placeholder="No min"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                        </div>
                        <div>
                            <label class="block text-xs text-gray-500 mb-1">Max Price (AED)</label>
                            <input type="number" v-model="maxPrice" placeholder="No max"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                        </div>
                        <div class="flex gap-2 pt-2">
                            <button @click="applyPriceRange"
                                class="flex-1 bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700">
                                Apply
                            </button>
                            <button @click="clearPriceRange"
                                class="flex-1 border border-gray-300 px-3 py-2 rounded-md text-sm hover:bg-gray-50">
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Beds Dropdown -->
            <div class="relative">
                <label class="block text-xs text-gray-500 mb-1">Beds</label>
                <button @click="toggleDropdown('beds')"
                    class="w-full text-left px-3 py-2 border border-gray-300 rounded-md bg-white flex justify-between items-center">
                    <span>{{ selectedBeds }}</span>
                    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <!-- Beds Dropdown Menu -->
                <div v-if="openDropdown === 'beds'"
                    class="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-20">
                    <div v-for="option in bedsOptions" :key="option" @click="selectOption('beds', option)"
                        class="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                        :class="{ 'bg-gray-50 font-medium': selectedBeds === option }">
                        {{ option }}
                    </div>
                </div>
            </div>

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

<script setup>
import { ref } from 'vue'

// Dropdown state
const openDropdown = ref(null)

// Options
const purposeOptions = ['Rent', 'Buy', 'Commercial']
const propertyTypeOptions = ['All in Residential', 'Apartment', 'Villa', 'Townhouse', 'Penthouse', 'Studio']
const bedsOptions = ['Any', '1+', '2+', '3+', '4+', '5+']

// Selected values
const selectedPurpose = ref('Rent')
const selectedPropertyType = ref('All in Residential')
const selectedBeds = ref('Any')
const selectedPriceRange = ref('Any')

// Location
const location = ref('')

// Price range
const minPrice = ref('')
const maxPrice = ref('')

// Additional filters
const selectedBaths = ref(null)
const minArea = ref('')
const maxArea = ref('')

// Toggle dropdown
const toggleDropdown = (dropdown) => {
    openDropdown.value = openDropdown.value === dropdown ? null : dropdown
}

// Select option
const selectOption = (type, value) => {
    if (type === 'purpose') selectedPurpose.value = value
    if (type === 'propertyType') selectedPropertyType.value = value
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
        purpose: selectedPurpose.value,
        location: location.value,
        propertyType: selectedPropertyType.value,
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