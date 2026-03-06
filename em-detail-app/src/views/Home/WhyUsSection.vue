<template>
    <section ref="sectionRef" class="w-full relative mt-20">
        <!-- Heading -->
        <h2 class="text-2xl sm:text-3xl font-heading text-center mb-12 text-gray-700">
            Why Event Arena
        </h2>

        <!-- Container -->
        <div class="max-w-6xl rounded-[42px] px-6 py-10
             bg-white/40 backdrop-blur-md shadow-sm
             grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
             divide-y sm:divide-y-0 lg:divide-x divide-gray-300/40">
            <!-- Stat -->
            <div v-for="(item, i) in stats" :key="i" class="flex flex-col items-center justify-center py-8 gap-6 text-center
               transition duration-300 hover:scale-105">
                <!-- Icon -->
                <div class="w-16 h-16 flex items-center justify-center rounded-full
                 bg-gradient-to-br from-pink-200 to-pink-300
                 text-pink-600 shadow-md">
                    <component :is="item.icon" class="w-7 h-7" />
                </div>

                <!-- Animated Number -->
                <div class="text-3xl font-semibold text-gray-800">
                    {{ animatedValues[i] }}{{ item.suffix }}
                </div>

                <!-- Label -->
                <div class="text-gray-600 text-sm">
                    {{ item.label }}
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
    FaceSmileIcon,
    // CrownIcon,
    BellAlertIcon,
    LockClosedIcon,
    HeartIcon
} from '@heroicons/vue/24/outline'

/* ---------------- Stats Data ---------------- */

const stats = [
    { icon: FaceSmileIcon, value: 500000, suffix: '+', label: 'Happy Users' },
    { icon: BellAlertIcon, value: 600, suffix: '+', label: 'Verified Vendors' },
    { icon: LockClosedIcon, value: 100, suffix: '%', label: 'Secure Payment' },
    { icon: HeartIcon, value: 30000, suffix: '+', label: 'Weddings Planned' },
]

/* ---------------- Count Animation ---------------- */

const animatedValues = ref(stats.map(() => 0))
const sectionRef = ref<HTMLElement | null>(null)

const animateCount = () => {
    stats.forEach((stat, i) => {
        const duration = 1200
        const start = performance.now()

        const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            animatedValues.value[i] = Math.floor(progress * stat.value)

            if (progress < 1) requestAnimationFrame(step)
        }

        requestAnimationFrame(step)
    })
}

/* ---------------- Trigger when visible ---------------- */

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries: any[]) => {
            if (entries[0].isIntersecting) {
                animateCount()
                observer.disconnect()
            }
        },
        { threshold: 0.4 }
    )

    if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>
