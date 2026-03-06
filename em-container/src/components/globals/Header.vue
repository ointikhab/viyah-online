<template>
  <header class="bg-white shadow-sm border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        
        <!-- Logo -->
        <div class="flex items-center">
          <span class="text-xl font-bold text-indigo-600">
            Event-Arena
          </span>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <a href="#" class="text-gray-600 hover:text-indigo-600 transition">
            Home
          </a>
          <a href="#" class="text-gray-600 hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#" class="text-gray-600 hover:text-indigo-600 transition">
            Pricing
          </a>
          <a href="#" class="text-gray-600 hover:text-indigo-600 transition">
            Contact
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden text-gray-600"
        >
          ☰
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden border-t">
      <div class="px-4 py-3 space-y-2 bg-white">
        <a href="#" class="block text-gray-600 hover:text-indigo-600">
          Home
        </a>
        <a href="#" class="block text-gray-600 hover:text-indigo-600">
          Features
        </a>
        <a href="#" class="block text-gray-600 hover:text-indigo-600">
          Pricing
        </a>
        <a href="#" class="block text-gray-600 hover:text-indigo-600">
          Contact
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
