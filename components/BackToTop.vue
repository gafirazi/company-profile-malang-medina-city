<template>
  <button
    v-show="isVisible"
    @click="scrollToTop"
    type="button"
    class="fixed bottom-6 right-6 z-50 rounded-full bg-black/70 text-white shadow-lg backdrop-blur px-4 py-3 hover:bg-black focus:outline-none focus:ring-2 focus:ring-white/60 transition transform hover:-translate-y-0.5 active:translate-y-0"
    aria-label="Back to top"
  >
    <span class="sr-only">Back to top</span>
    <svg
      class="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      aria-hidden="true"
    >
      <path d="M18 15l-6-6-6 6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
  
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isVisible = ref(false)

function updateVisibility() {
  isVisible.value = window.scrollY > 240
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', updateVisibility, { passive: true })
  updateVisibility()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateVisibility)
})
</script>

