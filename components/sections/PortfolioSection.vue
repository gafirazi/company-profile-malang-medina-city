<template>
  <section class="bg-white py-16 text-gray-900">
    <div class="mx-auto max-w-6xl px-6 text-center">
      <h2 class="font-serif text-5xl font-semibold tracking-wide text-brand-greenDark">PORTOFOLIO</h2>
      <p class="mt-2 font-sans text-sm">Kami telah berkarya di property syariah sejak tahun 2015, menghadirkan deretan proyek baik di dalam maupun luar Kota Malang</p>

      <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div v-for="p in items" :key="p.id" class="overflow-hidden">
          <img :src="p.image || fallback" :alt="p.title" class="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import fallback from '@/assets/img/portfolio-1.png'

type PortfolioItem = { id: string; title: string; image: string | null }
const { data } = await useAsyncData<PortfolioItem[]>('portfolio', () => $fetch<PortfolioItem[]>('/api/portfolio'))
const items = computed(() => data.value ?? [])
</script>

<style scoped>
</style>