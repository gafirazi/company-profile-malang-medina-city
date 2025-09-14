<template>
  <nav class="fixed inset-x-0 top-0 z-50 text-white">
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
    <div class="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
      <a href="#" class="flex items-center gap-2">
        <img :src="logo" alt="Medina" class="h-8 w-auto" style="filter: brightness(0) invert(1);" />
      </a>
      <ul class="hidden items-center gap-8 font-sans text-sm md:flex">
        <li><a href="#lokasi" class="hover:underline">lokasi</a></li>
        <li><a href="#keunggulan" class="hover:underline">keunggulan kami</a></li>
        <li><a href="#produk" class="hover:underline">produk kami</a></li>
      </ul>
      <button type="button" class="md:hidden" @click="open = !open" aria-label="Toggle menu">
        <Icon :name="open ? 'mdi:close' : 'mdi:menu'" size="26" />
      </button>
      <transition name="fade">
        <div v-if="open" class="absolute right-4 top-full mt-2 w-56 rounded-md bg-black/50 p-3 backdrop-blur md:hidden">
          <a href="#lokasi" class="block rounded px-3 py-2 hover:bg-white/10" @click="open=false">lokasi</a>
          <a href="#keunggulan" class="block rounded px-3 py-2 hover:bg-white/10" @click="open=false">keunggulan kami</a>
          <a href="#produk" class="block rounded px-3 py-2 hover:bg-white/10" @click="open=false">produk kami</a>
        </div>
      </transition>
    </div>
  </nav>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/assets/img/our-products-logo.png'
const open = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .15s ease }
.fade-enter-from, .fade-leave-to { opacity: 0 }
</style>

