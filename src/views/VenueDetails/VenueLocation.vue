<template>
    <div class="bg-white shadow rounded-lg overflow-hidden p-4">
        <h2 class="text-xl font-semibold mb-4">Location</h2>

        <div v-if="location" class="w-full h-64 rounded-md overflow-hidden">
            <div ref="mapContainer" class="w-full h-full"></div>
        </div>

        <div v-else class="text-gray-500">
            Location not available
        </div>

        <p v-if="location.address" class="mt-2 text-gray-700 text-sm">
            {{ location.address }}
        </p>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import L from 'leaflet'

const props = defineProps({
    location: {
        type: Object,
        required: true
        // Expected format: { lat: Number, lng: Number, address: String }
    }
})

const mapContainer = ref(null)
let mapInstance = null

onMounted(() => {
    if (props.location && mapContainer.value) {
        mapInstance = L.map(mapContainer.value).setView([props.location.lat, props.location.lng], 15)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(mapInstance)

        L.marker([props.location.lat, props.location.lng]).addTo(mapInstance)
    }
})

// Watch for changes in location prop
watch(() => props.location, (newLocation) => {
    if (newLocation && mapInstance) {
        mapInstance.setView([newLocation.lat, newLocation.lng], 15)
        L.marker([newLocation.lat, newLocation.lng]).addTo(mapInstance)
    }
})
</script>