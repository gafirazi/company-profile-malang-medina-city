<template>
  <footer class="relative text-white">
    <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${footerBg})` }"></div>
    <!-- Top white gradient to blend with previous section -->
    <div class="absolute inset-0" :style="gradientStyle"></div>
    <!-- Subtle overall haze -->
    <div class="absolute inset-0 bg-white/10"></div>

    <div class="relative mx-auto max-w-6xl px-6 py-14">
      <div class="grid grid-cols-1 items-end gap-6 md:grid-cols-3">
        <!-- Left: form -->
        <div class="md:col-span-2">
          <h3 class="font-sans text-2xl font-extrabold lowercase tracking-wide">kemitraan marketing</h3>
          <form class="mt-4 flex flex-wrap items-center gap-3">
            <input
              type="text"
              placeholder="Nama"
              class="h-11 min-w-[240px] flex-1 rounded-full bg-white/80 px-4 text-sm text-[#0B1511] placeholder:text-[#0B1511]/60 focus:outline-none"
            />
            <input
              type="text"
              placeholder="No. HP/Whatsapp"
              class="h-11 min-w-[240px] flex-1 rounded-full bg-white/80 px-4 text-sm text-[#0B1511] placeholder:text-[#0B1511]/60 focus:outline-none"
            />
            <button type="button" class="h-11 rounded-full bg-white px-6 text-sm font-semibold text-[#0B1511]">
              submit
            </button>
          </form>
        </div>

        <!-- Right: logo and socials -->
        <div class="flex flex-col items-end gap-3">
          <img :src="logo" alt="Logo" class="h-16 w-auto" style="filter: brightness(0) invert(1);" />
          <div class="mt-2 flex items-center gap-4 text-white">
            <Icon name="mdi:facebook" size="22" />
            <Icon name="mdi:instagram" size="22" />
            <Icon name="mdi:whatsapp" size="22" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import footerBg from '@/assets/img/footer.png'
import logo from '@/assets/img/our-products-logo.png'

const gradientStyle = {
  background:
    'linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0.15) 70%, rgba(255,255,255,0) 100%)'
}
</script>

