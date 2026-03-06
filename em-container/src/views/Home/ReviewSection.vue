<template>
    <section class="max-w-6xl py-20 mt-5">

        <div class="flex flex-col lg:flex-row items-center gap-12" @mouseenter="pauseAuto" @mouseleave="startAuto"
            @touchstart="onTouchStart" @touchend="onTouchEnd">

            <!-- LEFT FIXED IMAGE -->
            <div class="w-full lg:w-1/2">
                <img src="/images/image.avif" class="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-md" />
            </div>

            <!-- RIGHT CONTENT -->
            <div class="w-full lg:w-1/2 relative pb-24 overflow-hidden">

                <!-- Sliding Wrapper -->
                <div class="flex transition-transform duration-500 ease-out"
                    :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                    <div v-for="(review, i) in reviews" :key="i" class="min-w-full">
                        <h3 class="font-heading text-lg mb-4 mt-10">
                            {{ review.name }}
                        </h3>

                        <p class="text-gray-700 leading-relaxed text-lg">
                            "{{ review.text }}"
                        </p>
                    </div>
                </div>

                <!-- BUTTONS -->
                <div class="absolute bottom-0 right-0 flex gap-4">

                    <button @click="prev" class="w-14 h-14 rounded-full
                   bg-white shadow-md border border-gray-200
                   flex items-center justify-center
                   hover:scale-110 hover:shadow-lg transition">
                        ←
                    </button>

                    <button @click="next" class="w-14 h-14 rounded-full
                   bg-white shadow-md border border-gray-200
                   flex items-center justify-center
                   hover:scale-110 hover:shadow-lg transition">
                        →
                    </button>

                </div>
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const reviews = [
    {
        name: 'Namra',
        text: 'Shadiyana was very helpful. Tayyaba Arooj was in coordination with me all the time and helped me understand many aspects..Loved the experience! Found everything needed for my wedding in one place. Loved the experience! Found everything needed for my wedding in one place. Loved the experience! Found everything needed for my wedding in one place. Loved the experience! Found everything needed for my wedding in one place. Loved the experience! Found everything needed for my wedding in one place..'
    },
    {
        name: 'Ayesha',
        text: 'Amazing service and smooth planning process. Vendors were responsive and the platform made everything easy. Loved the experience! Found everything needed for my wedding in one place. Loved the experience! Found everything needed for my wedding in one place. Loved the experience! Found everything needed for my wedding in one place. Loved the experience! Found everything needed for my wedding in one place.'
    },
    {
        name: 'Hassan',
        text: 'Loved the experience! Found everything needed for my wedding in one place. Loved the experience! Found everything needed for my wedding in one place. Loved the experience! Found everything needed for my wedding in one place. Loved the experience! Found everything needed for my wedding in one place. Loved the experience! Found everything needed for my wedding in one place.'
    }
]

const currentIndex = ref(0)

const next = () => {
    currentIndex.value =
        (currentIndex.value + 1) % reviews.length
}

const prev = () => {
    currentIndex.value =
        (currentIndex.value - 1 + reviews.length) % reviews.length
}

const goTo = (i: number) => {
    currentIndex.value = i
}

//
// AUTO PLAY
//
let interval: any

const startAuto = () => {
    interval = setInterval(next, 5000)
}

const pauseAuto = () => {
    clearInterval(interval)
}

onMounted(startAuto)
onUnmounted(pauseAuto)

//
// SWIPE SUPPORT
//
let startX: any = 0

const onTouchStart = (e: TouchEvent) => {
    startX = e?.changedTouches?.[0]?.clientX
}

const onTouchEnd = (e: TouchEvent) => {
    const diff = (e?.changedTouches?.[0]?.clientX || 0) - startX

    if (diff > 50) prev()
    if (diff < -50) next()
}
</script>

<style scoped>
/* Smooth fade animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
