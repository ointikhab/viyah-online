<template>
    <div :class="[
        'flex flex-col sm:flex-row justify-center items-center px-6 py-4 text-sm font-medium gap-2 sm:gap-6 text-center rounded-lg',
        backgroundColor,
        borderColor
    ]" style="background: linear-gradient(to right, #FFD7E0, #FFB3C6);">
        <!-- Banner Text -->
        <div class="font-heading font-medium text-[clamp(1.25rem,5vw,1.75rem)] text-center text-gray-800">
            {{ text }}
        </div>

        <!-- Timer -->
        <div v-if="remainingTime >= 0"
            class="flex min-w-36 sm:min-w-44 justify-center items-center gap-2 text-white px-4 py-2 rounded-full"
            style="background: linear-gradient(to right, #FF9AA2, #FF6B84);">
            {{ formattedTime }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCountdown, formatMs } from '../../hooks/useCountDown'

const props = defineProps<{
    text: string
    color?: string
    time: number | string
}>()

const remainingTime = useCountdown(props.time)

// Optional: for dynamic background (we can ignore if using style attribute)
const backgroundColor = computed(() => props.color ?? '')
const borderColor = '' // remove dark border for lighter style

const formattedTime = computed(() => formatMs(remainingTime.value))
</script>
