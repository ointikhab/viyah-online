<template>
    <div class="absolute right-0 mt-1 w-72 bg-white border border-gray-200 rounded-md shadow-lg z-20 p-4">
        <div class="space-y-5">

            <!-- Staff -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Staff</label>
                <div class="space-y-2">
                    <label v-for="option in staffOptions" :key="option" class="flex items-center gap-2">
                        <input type="checkbox" :value="option" v-model="model.staff" class="rounded" />
                        <span>{{ option }}</span>
                    </label>
                </div>
            </div>

            <!-- Cancellation -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                    Cancellation Policy
                </label>
                <div class="space-y-2">
                    <label v-for="option in cancellationOptions" :key="option" class="flex items-center gap-2">
                        <input type="checkbox" :value="option" v-model="model.cancellation" class="rounded" />
                        <span>{{ option }}</span>
                    </label>
                </div>
            </div>

            <!-- Parking -->
            <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">Parking Space</span>
                <button @click="model.parking = !model.parking" :class="model.parking ? 'bg-blue-600' : 'bg-gray-300'"
                    class="relative inline-flex h-6 w-11 items-center rounded-full transition">
                    <span :class="model.parking ? 'translate-x-6' : 'translate-x-1'"
                        class="inline-block h-4 w-4 transform bg-white rounded-full transition" />
                </button>
            </div>

            <!-- Wheelchair -->
            <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">
                    Wheelchair Accessibility
                </span>
                <button @click="model.wheelchair = !model.wheelchair"
                    :class="model.wheelchair ? 'bg-blue-600' : 'bg-gray-300'"
                    class="relative inline-flex h-6 w-11 items-center rounded-full transition">
                    <span :class="model.wheelchair ? 'translate-x-6' : 'translate-x-1'"
                        class="inline-block h-4 w-4 transform bg-white rounded-full transition" />
                </button>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
const model = defineModel<{
    venueType: string
    location: string
    city: string
    priceRange: { min: number | null; max: number | null }
    staff: string[]
    cancellation: string[]
    parking: boolean
    wheelchair: boolean
}>()

const staffOptions = ['Male', 'Female', 'Transgender']
const cancellationOptions = ['Refundable', 'Non Refundable', 'Partial']
</script>