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

          <a href="#" class="text-gray-600 hover:text-indigo-600 transition">
            My Wishlist {{ wishlistCount }}
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" class="md:hidden text-gray-600">
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
import { ref, onMounted, onUnmounted } from 'vue';


const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const wishlistCount = ref(0);

// Helper to read wishlist from localStorage
const updateCountFromLocalStorage = () => {
  const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
  wishlistCount.value = wishlist.length;
};

// Handle wishlist toggle event from remote
const handleWishlistToggle = (event: CustomEvent) => {
  const { id, name } = event.detail;
  console.log('Received wishlist event from remote:', id, name);

  let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

  // Toggle venue in wishlist
  const exists = wishlist.find((v: any) => v.id === id);
  if (exists) {
    wishlist = wishlist.filter((v: any) => v.id !== id);
  } else {
    wishlist.push({ id, name });
  }

  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateCountFromLocalStorage();
};

onMounted(() => {
  updateCountFromLocalStorage();
  window.addEventListener('wishlistToggle', handleWishlistToggle as EventListener);
});

onUnmounted(() => {
  window.removeEventListener('wishlistToggle', handleWishlistToggle as EventListener);
});
</script>
