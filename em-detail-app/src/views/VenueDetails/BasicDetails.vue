<template>
    <div>

        <!-- Title -->
        <div class="flex items-center gap-3 mb-2">
            <div class="w-10 h-10 rounded-full bg-blue-900"></div>
            <h1 class="text-3xl font-semibold">{{ venueDetails.title }}</h1>
        </div>

        <!-- Rating -->
        <div class="flex items-center text-sm text-gray-600 mb-6">
            ⭐ 3.5 (8)
            <span class="mx-3">|</span>
            Marquees Complex (PSO), Expressway, Islamabad
        </div>

        <!-- DETAILS -->
        <h2 class="text-xl font-semibold mb-4">Details</h2>

        <div class="grid grid-cols-2 gap-y-6 text-gray-700">

            <div>
                <p class="text-xs text-gray-500">VENUE TYPE</p>
                <p class="font-medium">{{ venueDetails.venueType }}</p>
            </div>

            <div>
                <p class="text-xs text-gray-500">Venue Registration Number</p>
                <p class="font-medium">{{ venueDetails.sku }}</p>
            </div>

            <div>
                <p class="text-xs text-gray-500">WHEELCHAIR ACCESSIBILITY</p>
                <p class="font-medium">{{ venueDetails.wheelchair ? 'Yes' : 'No' }}</p>
            </div>

            <div>
                <p class="text-xs text-gray-500">STAFF</p>
                <p class="font-medium">{{ venueDetails.staff }}</p>
            </div>

            <div>
                <p class="text-xs text-gray-500">CANCELLATION POLICY</p>
                <p class="font-medium">Partially Refundable</p>
            </div>

        </div>

        <!-- DESCRIPTION -->
        <div class="mt-6">
            <p class="text-xs text-gray-500 mb-1">DESCRIPTION</p>

            <p class="text-gray-700 leading-relaxed">
                {{ venueDetails.description }}
            </p>
        </div>

    </div>
</template>

<script setup>
import { defineProps } from 'vue'

// Define props
const props = defineProps({
    venueDetails: {
        type: Object,
        required: true
    }
})
</script>