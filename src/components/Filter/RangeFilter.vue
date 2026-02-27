<template>
    <div class="relative">
        <label class="block text-xs text-gray-500 mb-1">{{ label }}</label>

        <button @click="toggleDropdown"
            class="w-full text-left px-3 py-2 border border-gray-300 rounded-md bg-white flex justify-between items-center">
            <span>{{ displayText }}</span>
            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>

        <div v-if="isOpen"
            class="absolute left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-20 p-4">
            <div class="space-y-3">
                <div>
                    <label class="block text-xs text-gray-500 mb-1">Min</label>
                    <input type="number" v-model="localMin" :placeholder="`Min (${min})`"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
                </div>

                <div>
                    <label class="block text-xs text-gray-500 mb-1">Max</label>
                    <input type="number" v-model="localMax" :placeholder="`Max (${max})`"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
                </div>

                <div class="flex gap-2 pt-2">
                    <button @click="apply"
                        class="flex-1 bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700">
                        Apply
                    </button>

                    <button @click="clear"
                        class="flex-1 border border-gray-300 px-3 py-2 rounded-md text-sm hover:bg-gray-50">
                        Clear
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
    label: string
    min: number
    max: number
}>()

const emit = defineEmits<{
    (e: 'apply', value: { min: number | null; max: number | null }): void
}>()

const isOpen = ref(false)
const localMin = ref<number | null>(null)
const localMax = ref<number | null>(null)

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const apply = () => {
    emit('apply', {
        min: localMin.value,
        max: localMax.value
    })
    isOpen.value = false
}

const clear = () => {
    localMin.value = null
    localMax.value = null
    emit('apply', { min: null, max: null })
    isOpen.value = false
}

const displayText = computed(() => {
    if (localMin.value && localMax.value)
        return `${localMin.value} - ${localMax.value}`
    if (localMin.value)
        return `From ${localMin.value}`
    if (localMax.value)
        return `Up to ${localMax.value}`
    return 'Any'
})
</script>