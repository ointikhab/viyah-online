<template>
    <section class="relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
        :style="{ backgroundImage: `url(${backgroundImage})` }">
        <!-- Dark overlay -->
        <div class="absolute inset-0 bg-black/50"></div>

        <!-- Content container -->
        <div class="relative max-w-7xl mx-auto px-4 py-16 sm:py-20 text-center text-white">

            <!-- Headline -->
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 drop-shadow-lg leading-snug">
                Find Halls, Catering, Decor & More —<br class="sm:hidden" /> All Your Event Needs in One Place
            </h1>

            <!-- Search box -->
            <div class="bg-black/60 rounded-lg max-w-full sm:max-w-4xl mx-auto p-4 sm:p-6 shadow-lg">

                <!-- Category tabs -->
                <nav
                    class="flex flex-wrap justify-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-white text-sm sm:text-base font-medium">
                    <button v-for="cat in categories" :key="cat" @click="selectCategory(cat)" :class="[
                        'px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm',
                        selectedCategory === cat ? 'bg-red-600' : 'hover:bg-white/20'
                    ]">
                        {{ cat }}
                    </button>
                </nav>

                <!-- Search input + button -->
                <form @submit.prevent="onSearch" class="flex flex-col sm:flex-row gap-2">
                    <input v-model="query" type="search" placeholder="Search for anything"
                        class="flex-grow rounded-l-md px-4 py-3 bg-gray-100/80 text-gray-800 placeholder-gray-500 focus:outline-none" />

                    <button type="submit"
                        class="bg-red-600 px-6 py-3 rounded-md sm:rounded-r-md font-semibold hover:bg-red-700 transition">
                        Search
                    </button>
                </form>

            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const backgroundImage = '/images/home-search-banner.jpg'


const categories = ['Venues', 'Photographers', 'Bridal Makeup', 'Decor', 'Catering', 'Henna', 'Car Rentals']

const selectedCategory = ref('Venues')
const query = ref('')

function selectCategory(cat: string) {
    selectedCategory.value = cat
}

function onSearch() {
    alert(`Search: "${query.value}" in category: "${selectedCategory.value}"`)
    // Replace alert with your actual search logic
}
</script>
