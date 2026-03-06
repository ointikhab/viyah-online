<script setup lang="ts">
import DealCards from '@/components/Cards/DealCards.vue'

interface DealSection {
    title: String
    deals: {
        image: String
        title: String
        price: String
        discount: Number
        till: String
        location: String
    }[]
}

const { title, deals } = defineProps<DealSection>()
</script>

<template>
    <section class="relative mt-10">
        <div class="max-w-7xl">

            <h2 class="text-3xl font-semibold mb-10 text-gray-900">
                {{ title }}
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <DealCards v-for="(deal, i) in deals" :key="i" v-bind="deal" />
            </div>

        </div>
    </section>
</template>
