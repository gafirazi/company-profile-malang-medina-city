<template>
  <section class="bg-white py-16 text-gray-900">
    <div class="mx-auto max-w-6xl px-6 text-center">
      <h2 class="font-serif text-5xl font-semibold tracking-wide text-brand-greenDark">PORTOFOLIO</h2>
      <p class="mt-2 font-sans text-sm">Kami telah berkarya di property syariah sejak tahun 2015, menghadirkan deretan proyek baik di dalam maupun luar Kota Malang</p>

      <div class="mx-auto mt-8 max-w-6xl">
        <div v-if="shouldUseCarousel" class="relative">
          <transition name="fade" mode="out-in">
            <div :key="current" class="px-0">
              <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div v-for="p in currentGroupFiltered" :key="p.id">
                  <div class="aspect-[16/9] overflow-hidden rounded-sm ring-1 ring-black/10">
                    <img :src="p.image || ''" :alt="p.description" class="w-full h-full object-cover" />
                  </div>
                  <p class="mt-2 font-sans text-sm lowercase">{{ p.description }}</p>
                </div>
              </div>
            </div>
          </transition>

          <button v-if="hasMultiplePages"
            type="button"
            class="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 text-gray-900 hover:bg-black/30 flex"
            @click="prev"
            aria-label="Previous"
          >
            <Icon name="mdi:chevron-left" size="24" />
          </button>
          <button v-if="hasMultiplePages"
            type="button"
            class="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 text-gray-900 hover:bg-black/30 flex"
            @click="next"
            aria-label="Next"
          >
            <Icon name="mdi:chevron-right" size="24" />
          </button>
        </div>

        <div v-else class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div v-for="p in itemsFiltered" :key="p.id">
            <div class="aspect-[16/9] overflow-hidden rounded-sm ring-1 ring-black/10">
              <img :src="p.image || ''" :alt="p.description" class="w-full h-full object-cover" />
            </div>
            <p class="mt-2 font-sans text-sm lowercase">{{ p.description }}</p>
          </div>
        </div>

        <div v-if="shouldUseCarousel && hasMultiplePages" class="mt-6 flex justify-center gap-2">
          <button
            v-for="i in totalPages"
            :key="i-1"
            class="h-2 w-2 rounded-full"
            :class="(i-1) === current ? 'bg-brand-greenDark' : 'bg-black/20'"
            @click="go(i-1)"
            aria-label="Go to page"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type PortfolioItem = { id: string; description: string; image: string | null }
const { data } = await useAsyncData<PortfolioItem[]>('portfolio', () => $fetch<PortfolioItem[]>('/api/portfolio'))
const items = computed(() => data.value ?? [])
const itemsFiltered = computed(() => items.value.filter((p) => Boolean(p.image)))

import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
const current = ref(0)
const isDesktop = ref(false)

function detectBp() {
  if (typeof window === 'undefined') return
  isDesktop.value = window.matchMedia('(min-width: 768px)').matches
}

onMounted(() => {
  detectBp()
  window.addEventListener('resize', detectBp)
})
onBeforeUnmount(() => {
  if (typeof window !== 'undefined') window.removeEventListener('resize', detectBp)
})

const pageSize = computed(() => (isDesktop.value ? 3 : 1))
const totalPages = computed(() => Math.max(1, Math.ceil(items.value.length / pageSize.value)))
const currentGroup = computed(() => {
  const start = current.value * pageSize.value
  return itemsFiltered.value.slice(start, start + pageSize.value)
})
const currentGroupFiltered = computed(() => currentGroup.value)

const next = () => { current.value = (current.value + 1) % totalPages.value }
const prev = () => { current.value = (current.value - 1 + totalPages.value) % totalPages.value }
const go = (i: number) => { current.value = i }

const shouldUseCarousel = computed(() => {
  // On desktop need >=3 items to justify carousel; on mobile any count uses carousel
  return isDesktop.value ? items.value.length >= 3 : items.value.length >= 1
})
const hasMultiplePages = computed(() => totalPages.value > 1)
</script>

<style scoped>
</style>