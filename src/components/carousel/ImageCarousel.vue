<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    images: string[]
}>()

const index = ref(0)

const next = () => {
    index.value = (index.value + 1) % props.images.length
}

const prev = () => {
    index.value =
        (index.value - 1 + props.images.length) % props.images.length
}
</script>

<template>
    <div class="relative h-60 lg:h-full">

        <img :src="images[index]" class="w-full h-full object-cover" />

        <!-- CONTROLS -->
        <button @click="prev" class="absolute left-2 top-1/2 -translate-y-1/2
           bg-white/80 rounded-full px-3 py-1">
            ←
        </button>

        <button @click="next" class="absolute right-2 top-1/2 -translate-y-1/2
           bg-white/80 rounded-full px-3 py-1">
            →
        </button>

    </div>
</template>
