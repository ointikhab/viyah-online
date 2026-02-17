<template>
    <div class="w-full flex justify-center mt-6">
        <div
            class="w-full max-w-7xl bg-white rounded-2xl shadow-md border border-gray-200 flex flex-wrap md:flex-nowrap items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <!-- Purpose -->
            <div class="flex-1 p-4 min-w-[160px]">
                <label class="block text-sm text-gray-500 mb-1">Purpose</label>
                <select v-model="filters.purpose"
                    class="w-full bg-transparent focus:outline-none text-gray-800 font-medium">
                    <option value="rent">Rent</option>
                    <option value="buy">Buy</option>
                </select>
            </div>

            <!-- Location -->
            <div class="flex-1 p-4 min-w-[200px]">
                <label class="block text-sm text-gray-500 mb-1">Location</label>
                <input v-model="filters.location" type="text" placeholder="Enter location"
                    class="w-full bg-transparent focus:outline-none text-gray-800 font-medium placeholder-gray-400" />
            </div>

            <!-- Property Type -->
            <div class="flex-1 p-4 min-w-[180px]">
                <label class="block text-sm text-gray-500 mb-1">Property Type</label>
                <select v-model="filters.propertyType"
                    class="w-full bg-transparent focus:outline-none text-gray-800 font-medium">
                    <option value="">All in Residential</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="townhouse">Townhouse</option>
                </select>
            </div>

            <!-- Price Range -->
            <div class="flex-1 p-4 min-w-[150px]">
                <label class="block text-sm text-gray-500 mb-1">Price Range</label>
                <select v-model="filters.priceRange"
                    class="w-full bg-transparent focus:outline-none text-gray-800 font-medium">
                    <option value="">Any</option>
                    <option value="0-50000">0 - 50,000</option>
                    <option value="50000-100000">50,000 - 100,000</option>
                    <option value="100000+">100,000+</option>
                </select>
            </div>

            <!-- Beds -->
            <div class="flex-1 p-4 min-w-[120px]">
                <label class="block text-sm text-gray-500 mb-1">Beds</label>
                <select v-model="filters.beds"
                    class="w-full bg-transparent focus:outline-none text-gray-800 font-medium">
                    <option value="">Any</option>
                    <option value="1">1 Bed</option>
                    <option value="2">2 Beds</option>
                    <option value="3">3 Beds</option>
                    <option value="4+">4+ Beds</option>
                </select>
            </div>

            <!-- Filters -->
            <div class="flex-1 p-4 min-w-[200px]">
                <label class="block text-sm text-gray-500 mb-1">Filters</label>
                <button @click="toggleAdvanced"
                    class="w-full text-left bg-transparent focus:outline-none text-gray-800 font-medium">
                    Baths, Area / Size (sqft), etc
                </button>
            </div>

            <!-- Search Button -->
            <div class="p-4 flex items-center justify-center">
                <button @click="emitFilters"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition">
                    Search
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";

const emit = defineEmits(["search"]);

const filters = reactive({
    purpose: "rent",
    location: "",
    propertyType: "",
    priceRange: "",
    beds: "",
});

const toggleAdvanced = () => {
    alert("Open advanced filters modal here");
};

const emitFilters = () => {
    emit("search", { ...filters });
};
</script>
