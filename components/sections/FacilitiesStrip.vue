<template>
  <section class="bg-brand-greenDark py-14 text-white">
    <div class="mx-auto max-w-6xl px-6">
      <h3 class="font-serif text-4xl font-semibold text-brand-cream">FASILITAS KAMI</h3>
      <p class="mt-1 font-sans text-sm italic text-brand-cream">siap melengkapi kebutuhan keluarga Anda</p>

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

      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <div v-for="(src, i) in gallery" :key="i" class="w-full flex-1">
          <div class="aspect-[16/9] overflow-hidden rounded-sm ring-1 ring-white/10">
            <img :src="src" :alt="`fasilitas-${i + 1}`" class="h-full w-full object-cover" />
          </div>
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

const labels = [
  'Masjid',
  'Club House',
  'Food Archade',
  'Fas. Pendidikan',
  'Lapangan',
  'Gate',
  'Lap. Berkuda',
  'Pasar',
  'Glamping'
]

const iconSources = [i1, i2, i3, i4, i5, i6, i7, i8, i9]
const items = labels.map((label, i) => ({ label, src: iconSources[i] }))

const gallery = [g1, g2, g3]
</script>