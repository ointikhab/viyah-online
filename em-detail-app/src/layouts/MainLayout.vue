<template>
    <div class="flex flex-col min-h-screen">

        <!-- Header -->
        <AppHeader />
        <CounterBanner v-if="!isMobile" text="Photographers starting from PKR 10k! Book Now"
            color="bg-pink-100 text-black" :time="new Date().getTime() + 3 * 24 * 60 * 60 * 1000" />

        <!-- Main Content -->
        <main class="flex-1 container mx-auto px-4 py-6">
            <router-view />
        </main>

        <!-- Footer -->
        <AppFooter />

    </div>
</template>

<script setup lang="ts">
import AppHeader from "@/components/globals/Header.vue"
import AppFooter from '@/components/globals/Footer.vue'
import CounterBanner from "@/components/banners/CounterBanner.vue";
import { useMobile } from "@/hooks/useMobile";

const { isMobile } = useMobile()
</script>
