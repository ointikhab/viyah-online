<script setup>
import BaseListingCard from '@/components/Cards/BaseListingCard.vue';
</script>

<template>

    <BaseListingCard>

        <!-- IMAGE -->
        <template #image>
            <img src="/images/catering.jpeg" class="w-full h-full object-cover" />
        </template>

        <!-- PRICE -->
        <template #price>
            <h2 class="text-xl font-bold">
                AED 55,000
                <span class="text-gray-500 text-sm font-normal">
                    Yearly
                </span>
            </h2>
        </template>

        <!-- BADGE -->
        <template #badge>
            <span class="bg-orange-100 text-orange-600 px-2 py-1 text-xs rounded">
                PREMIUM
            </span>
        </template>

        <!-- TITLE -->
        <template #title>
            <p class="mt-1 font-medium">Apartment</p>
        </template>

        <!-- DETAILS -->
        <template #details>
            <p class="text-gray-600 text-sm mt-2">
                1 Bed · 2 Baths · 710 sqft
            </p>
        </template>

        <!-- LOCATION -->
        <template #location>
            <p class="text-gray-500 text-sm mt-2">
                International City Phase 2
            </p>
        </template>

        <!-- ACTIONS -->
        <template #actions>
            <button class="px-3 py-2 bg-gray-100 rounded">
                Email
            </button>

            <button class="px-3 py-2 bg-gray-100 rounded">
                Call
            </button>

            <button class="px-3 py-2 bg-green-100 rounded">
                WhatsApp
            </button>
        </template>

    </BaseListingCard>

</template>
