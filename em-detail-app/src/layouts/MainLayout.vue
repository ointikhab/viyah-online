<template>
    <div class="flex flex-col min-h-screen">

        <!-- Header -->
        <!-- Main Content -->
        <main class="flex-1 container mx-auto px-4 py-6">
            <router-view />
        </main>

    </div>
</template>

<script setup lang="ts">
import { useMobile } from "../hooks/useMobile";

const { isMobile } = useMobile()
</script>
