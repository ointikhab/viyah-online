<template>
    <div class="bg-white shadow rounded-lg p-4">
        <h2 class="text-xl font-semibold mb-4">Reviews ({{ reviews.length }})</h2>

        <div v-if="reviews.length" class="space-y-4">
            <div v-for="(review, index) in reviews" :key="index" class="border-b pb-3 last:border-b-0">
                <!-- Reviewer Name and Date -->
                <div class="flex items-center justify-between mb-1">
                    <p class="font-medium">{{ review.reviewerName }}</p>
                    <p class="text-sm text-gray-500">{{ formatDate(review.date) }}</p>
                </div>

                <!-- Rating Stars -->
                <div class="flex items-center mb-1 text-yellow-500">
                    <span v-for="star in 5" :key="star">
                        <span v-if="star <= review.rating">★</span>
                        <span v-else class="text-gray-300">★</span>
                    </span>
                </div>

                <!-- Comment -->
                <p class="text-gray-700 text-sm">{{ review.comment }}</p>
            </div>
        </div>

        <div v-else class="text-gray-500 text-sm">
            No reviews yet.
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    reviews: {
        type: Array,
        required: true,
        default: () => []
    }
})

// Format date nicely
const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })
}
</script>