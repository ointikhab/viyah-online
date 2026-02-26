<template>
    <div class="flex flex-col md:flex-row items-center justify-between bg-white p-4 shadow rounded-md">
        <!-- Left side: Title -->
        <div class="text-lg font-semibold text-gray-800 mb-2 md:mb-0">
            Avaialble venues in Karachi &bull;
            <span class="text-gray-500">{{ totalAds.toLocaleString() }} Ads</span>
        </div>

        <!-- Right side: Controls -->
        <div class="flex items-center space-x-2">
            <!-- Sort Dropdown - Custom implementation to match image -->
            <div class="relative">
                <button @click="toggleDropdown" class="sort-button flex items-center justify-between min-w-[180px]">
                    <span>Sort: <span class="font-medium">{{ selectedSort }}</span></span>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <!-- Dropdown Menu -->
                <div v-if="isDropdownOpen"
                    class="dropdown-menu absolute right-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <div class="p-2 border-b border-gray-200">
                        <div class="text-sm text-gray-500">Marina (2,784)</div>
                    </div>
                    <div class="py-1">
                        <div v-for="option in sortOptions" :key="option" @click="selectOption(option)"
                            class="dropdown-option px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            :class="{ 'bg-gray-50 font-medium': selectedSort === option }">
                            {{ option }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Save Search Button - Matches image style -->
            <button
                class="save-search-btn px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition">
                Save Search
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const totalAds = ref(60608)
const sortOptions = ['Popular', 'Verified', 'Newest to Oldest', 'Oldest to Newest', 'Price Highest to Lowest', 'Price Lowest to Highest']
const selectedSort = ref('Popular')
const isDropdownOpen = ref(false)

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
}

const selectOption = (option: string) => {
    selectedSort.value = option
    isDropdownOpen.value = false
}

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (!target.closest('.relative')) {
        isDropdownOpen.value = false
    }
}

// Add/remove click outside listener
if (typeof window !== 'undefined') {
    window.addEventListener('click', handleClickOutside)
}
</script>

<style scoped>
.sort-button {
    border: 1px solid #d1d5db;
    /* gray-300 */
    border-radius: 0.375rem;
    /* rounded-md */
    padding: 0.5rem 0.75rem;
    color: #374151;
    /* gray-700 */
    background-color: white;
    cursor: pointer;
    font-size: 0.875rem;
    line-height: 1.25rem;
    white-space: nowrap;
}

.sort-button:hover {
    background-color: #f9fafb;
}

.dropdown-menu {
    max-height: 300px;
    overflow-y: auto;
}

.dropdown-option {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #374151;
    border-bottom: 1px solid #f3f4f6;
    /* Very light gray divider */
}

.dropdown-option:last-child {
    border-bottom: none;
}

.save-search-btn {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    border: 1px solid #d1d5db;
    background-color: white;
    color: #374151;
    padding: 0.5rem 1rem;
}

.save-search-btn:hover {
    background-color: #f9fafb;
}

/* Optional: Add a subtle shadow to dropdown */
.dropdown-menu {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>