<template>
    <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">Pricing Deals</h2>

            <!-- Deals List -->
            <div v-for="(deal, index) in deals" :key="index" class="border-b last:border-b-0 py-4">
                <div class="flex justify-between items-center">
                    <div>
                        <h3 class="text-lg font-semibold">{{ deal.name }}</h3>
                        <p class="text-sm text-gray-500">{{ deal.description }}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-xl font-bold text-green-600">{{ deal.price }}</p>
                        <p v-if="deal.originalPrice" class="text-sm line-through text-gray-400">{{ deal.originalPrice }}
                        </p>
                    </div>
                </div>
                <button class="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                    @click="selectDeal(deal)">
                    Book Now
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Sample deals data
const deals = ref([
    {
        name: 'Standard Package',
        description: 'Basic amenities included',
        price: '$99',
        originalPrice: '$120',
    },
    {
        name: 'Premium Package',
        description: 'Includes extra services and VIP access',
        price: '$199',
        originalPrice: '$250',
    },
    {
        name: 'Ultimate Package',
        description: 'All-inclusive luxury experience',
        price: '$299',
        originalPrice: '$400',
    },
])

const selectDeal = (deal) => {
    alert(`You selected: ${deal.name} for ${deal.price}`)
}
</script>