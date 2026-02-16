<template>
    <div class="group cursor-pointer
           transform transition-all duration-300 ease-out
           hover:-translate-y-2 hover:scale-[1.02]
           hover:shadow-xl">
        <!-- Image -->
        <div class="rounded-xl overflow-hidden shadow-sm">
            <img :src="image" :alt="title"
                class="w-full h-[170px] object-cover transition duration-300 group-hover:scale-105" />
        </div>

        <!-- Content Area -->
        <div class="px-3 py-3">

            <!-- Price -->
            <p class="text-red-600 font-semibold text-lg">
                {{ price }}
            </p>

            <!-- Specs -->
            <p class="text-gray-800 font-medium text-sm mt-1">
                {{ discount }}% Off • till {{ till }}
            </p>

            <!-- Location -->
            <p class="text-gray-500 text-sm mt-1 line-clamp-2">
                {{ location }}
            </p>

        </div>
    </div>
</template>

<script setup>
defineProps({
    image: String,
    title: String,
    price: String,
    discount: Number,
    till: String,
    location: String,
})
</script>
