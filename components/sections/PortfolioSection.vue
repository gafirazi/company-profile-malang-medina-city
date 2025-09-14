<template>
  <section class="bg-white py-16 text-gray-900">
    <div class="mx-auto max-w-6xl px-6 text-center">
      <h2 class="font-serif text-5xl font-semibold tracking-wide text-brand-greenDark">PORTOFOLIO</h2>
      <p class="mt-2 font-sans text-sm">Kami telah berkarya di property syariah sejak tahun 2015, menghadirkan deretan proyek baik di dalam maupun luar Kota Malang</p>

      <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div class="overflow-hidden">
          <img :src="p1" alt="the ritz puncak dieng" class="h-full w-full object-cover" />
          <p class="mt-2 font-sans text-sm lowercase">the ritz puncak dieng</p>
        </div>
        <div class="overflow-hidden">
          <img :src="p2" alt="medina residence 3" class="h-full w-full object-cover" />
          <p class="mt-2 font-sans text-sm lowercase">medina residence 3</p>
        </div>
        <div class="overflow-hidden">
          <img :src="p3" alt="villa sinergi" class="h-full w-full object-cover" />
          <p class="mt-2 font-sans text-sm lowercase">villa sinergi</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import p1 from '@/assets/img/portfolio-1.png'
import p2 from '@/assets/img/portfolio-2.png'
import p3 from '@/assets/img/portfolio-3.png'
</script>

<style scoped>
</style>