<template>
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6">
        <div v-for="service in services" :key="service.name"
            class="relative h-40 rounded-2xl shadow-md cursor-pointer hover:shadow-lg transition overflow-hidden flex justify-center items-center">
            <!-- Background image -->
            <div class="absolute inset-0 bg-center bg-cover filter brightness-75"
                :style="{ backgroundImage: `url(${service.img})` }"></div>

            <!-- Centered text -->
            <span class="relative z-10 text-white text-lg font-semibold text-center px-2">
                {{ service.name }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Service {
    name: string
    img: string
}

// Accept services array as a prop
const props = defineProps<{
    services: Service[]
}>()
</script>
