<template>
  <section class="bg-brand-greenDark py-14 text-white">
    <div class="mx-auto max-w-6xl px-6">
      <h3 class="font-serif text-4xl font-semibold text-brand-cream">{{ title || 'FASILITAS KAMI' }}</h3>
      <p class="mt-1 font-sans text-sm italic text-brand-cream">{{ subtitle || 'siap melengkapi kebutuhan keluarga Anda' }}</p>

      <div class="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="flex flex-col items-center text-center"
        >
          <div class="rounded-full border-2 border-brand-cream/80 p-1">
            <img :src="item.src" :alt="item.label" class="h-10 w-10 object-contain" />
          </div>
          <div class="mt-3 font-sans text-sm font-semibold text-brand-cream text-center">{{ item.label }}</div>
        </div>
      </div>

      <div class="mx-auto mt-10 max-w-6xl">
        <div v-if="shouldUseCarousel" class="relative">
          <transition name="fade" mode="out-in">
            <div :key="current" class="px-0">
              <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div v-for="(g, i) in currentGroup" :key="i">
                  <div class="aspect-[16/9] overflow-hidden rounded-sm ring-1 ring-white/10">
                    <img :src="g.image" :alt="g.description || `fasilitas-${(current * pageSize) + i + 1}`" class="h-full w-full object-cover" />
                  </div>
                  <p v-if="g.description" class="mt-2 font-sans text-sm text-brand-cream/90 text-center">{{ g.description }}</p>
                </div>
              </div>
            </div>
          </transition>

          <button
            v-if="hasMultiplePages"
            type="button"
            class="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white hover:bg-black/30 flex"
            @click="prev"
            aria-label="Previous"
          >
            <Icon name="mdi:chevron-left" size="24" />
          </button>
          <button
            v-if="hasMultiplePages"
            type="button"
            class="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white hover:bg-black/30 flex"
            @click="next"
            aria-label="Next"
          >
            <Icon name="mdi:chevron-right" size="24" />
          </button>
        </div>

        <div v-else class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div v-for="(g, i) in gallery" :key="i">
            <div class="aspect-[16/9] overflow-hidden rounded-sm ring-1 ring-white/10">
              <img :src="typeof g === 'string' ? g : (g.image || '')" :alt="(typeof g !== 'string' && g && g.description) ? g.description : `fasilitas-${i + 1}`" class="h-full w-full object-cover" />
            </div>
            <p v-if="typeof g !== 'string' && g && g.description" class="mt-2 font-sans text-sm text-brand-cream/90">{{ g.description }}</p>
          </div>
        </div>

        <div v-if="shouldUseCarousel && hasMultiplePages" class="mt-6 flex justify-center gap-2">
          <button
            v-for="i in totalPages"
            :key="i-1"
            class="h-2 w-2 rounded-full"
            :class="(i-1) === current ? 'bg-brand-cream' : 'bg-white/30'"
            @click="go(i-1)"
            aria-label="Go to page"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import i1 from '@/assets/img/icon/facilities-strip-1.png'
import i2 from '@/assets/img/icon/facilities-strip-2.png'
import i3 from '@/assets/img/icon/facilities-strip-3.png'
import i4 from '@/assets/img/icon/facilities-strip-4.png'
import i5 from '@/assets/img/icon/facilities-strip-5.png'
import i6 from '@/assets/img/icon/facilities-strip-6.png'
import i7 from '@/assets/img/icon/facilities-strip-7.png'
import i8 from '@/assets/img/icon/facilities-strip-8.png'
import i9 from '@/assets/img/icon/facilities-strip-9.png'

import g1 from '@/assets/img/facilities-strip-img-1.png'
import g2 from '@/assets/img/facilities-strip-img-2.png'
import g3 from '@/assets/img/facilities-strip-img-3.png'

type FacilityItem = { label: string; icon: string | null }
type FacilitiesData = { items: FacilityItem[]; gallery: ({ image: string | null; description?: string } | string | null)[]; title?: string | null; subtitle?: string | null }

const fallbackIcons = [i1, i2, i3, i4, i5, i6, i7, i8, i9]
const { data } = await useAsyncData<FacilitiesData>('facilities', () => $fetch<FacilitiesData>('/api/facilities'))

const items = computed(() => {
  const fromCms = data.value?.items || []
  if (fromCms.length) {
    return fromCms.map((it, idx) => ({ label: it.label, src: it.icon || fallbackIcons[idx % fallbackIcons.length] }))
  }
  const labels = ['Masjid', 'Club House', 'Food Archade', 'Fas. Pendidikan', 'Lapangan', 'Gate', 'Lap. Berkuda', 'Pasar', 'Glamping']
  return labels.map((label, i) => ({ label, src: fallbackIcons[i] }))
})

const gallery = computed(() => {
  const fromCmsRaw = data.value?.gallery || []
  const fromCms = fromCmsRaw
    .map((g: any) => {
      if (typeof g === 'string') return { image: g, description: '' }
      return { image: g?.image || null, description: g?.description || '' }
    })
    .filter((g: any) => Boolean(g.image)) as { image: string; description: string }[]
  return fromCms.length ? fromCms : [
    { image: g1, description: '' },
    { image: g2, description: '' },
    { image: g3, description: '' }
  ]
})

import { ref, computed as vueComputed, onMounted, onBeforeUnmount } from 'vue'
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

const pageSize = vueComputed(() => (isDesktop.value ? 3 : 1))
const totalPages = vueComputed(() => Math.max(1, Math.ceil(gallery.value.length / pageSize.value)))
const currentGroup = vueComputed(() => {
  const start = current.value * pageSize.value
  return gallery.value.slice(start, start + pageSize.value)
})

const next = () => { current.value = (current.value + 1) % totalPages.value }
const prev = () => { current.value = (current.value - 1 + totalPages.value) % totalPages.value }
const go = (i: number) => { current.value = i }

const shouldUseCarousel = vueComputed(() => (isDesktop.value ? gallery.value.length >= 3 : gallery.value.length >= 1))
const hasMultiplePages = vueComputed(() => totalPages.value > 1)

const title = computed(() => data.value?.title || null)
const subtitle = computed(() => data.value?.subtitle || null)
</script>