<template>
  <section id="keunggulan" class="bg-brand-greenDark py-14 text-white">
    <div class="mx-auto max-w-6xl px-6">
      <h3 class="font-serif text-4xl font-semibold text-brand-cream">KEUNGGULAN KAMI</h3>
      <p class="mt-1 font-sans text-sm italic text-brand-cream">yang terbaik dari Kami untuk hunian Anda</p>

      <div class="mt-6 grid grid-cols-1 gap-0 md:grid-cols-2">
        <!-- Image/slider area -->
        <div class="relative w-full overflow-hidden" :style="imagePanelStyle">
          <div
            class="h-full w-full"
            @touchstart="onTouchStart"
            @touchend="onTouchEnd"
          >
            <transition name="fade" mode="out-in">
              <img
                :key="currentSlide.image"
                :src="currentSlide.image"
                :alt="currentSlide.title"
                class="h-full w-full object-cover"
              />
            </transition>
          </div>
        </div>

        <!-- Text panel -->
        <div ref="textPanelRef" class="bg-brand-green relative px-6 py-6 md:px-8 md:py-8" :style="textPanelStyle">
          <div class="font-sans text-brand-cream/80">
            <span class="font-serif text-5xl font-semibold text-brand-cream">0{{ current + 1 }}</span>
            <span class="mx-2 text-xl">/</span>
            <span class="text-xl">0{{ safeSlides.length }}</span>
          </div>
          <h4 class="mt-2 font-sans text-3xl font-extrabold text-white">{{ currentSlide.title }}</h4>
          <div class="mt-4 font-sans text-[15px] leading-7 text-white/85 whitespace-pre-line">
            <p>{{ currentSlide.paragraph }}</p>
          </div>
          <div class="absolute bottom-4 right-4 flex items-center gap-3">
            <button
              type="button"
              class="rounded-full bg-black/30 p-2 text-white hover:bg-black/50 flex"
              @click="prev"
              aria-label="Previous"
            >
              <Icon name="mdi:chevron-left" size="24" />
            </button>
            <button
              type="button"
              class="rounded-full bg-black/30 p-2 text-white hover:bg-black/50 flex"
              @click="next"
              aria-label="Next"
            >
              <Icon name="mdi:chevron-right" size="24" />
            </button>
          </div>
        </div>
      </div>

      <!-- Hidden measurement container -->
      <div ref="measureRef" class="fixed -left-[9999px] top-0 invisible">
        <div v-for="s in safeSlides" :key="s.title" class="px-6 py-6 md:px-8 md:py-8">
          <div class="font-sans text-brand-cream/80">
            <span class="font-serif text-5xl font-semibold text-brand-cream">00</span>
            <span class="mx-2 text-xl">/</span>
            <span class="text-xl">00</span>
          </div>
          <h4 class="mt-2 font-sans text-3xl font-extrabold text-white">{{ s.title }}</h4>
          <div class="mt-4 font-sans text-[15px] leading-7 text-white/85 whitespace-pre-line">
            <p>{{ s.paragraph }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import s1 from '@/assets/img/facilities-strip-img-1.png'
import s2 from '@/assets/img/facilities-strip-img-1.png'
import s3 from '@/assets/img/facilities-strip-img-1.png'
import s4 from '@/assets/img/facilities-strip-img-1.png'

const slideImages = [s1, s2, s3, s4]

const defaultSlides = [
  {
    image: slideImages[0],
    title: 'Lokasi Strategis',
    paragraphs: [
      'Berada di jalur malang-surabaya, serta jalur utama malang- kota wisata Batu, membuat Malang Medina City menjadi pilihan tempat tinggal sekaligus investasi masa depan yang menjanjikan. Memberikan kemudahan akses menuju tempat-tempat strategis Kota Malang',
      'Selain itu Malang Medina City juga bersebelahan langsung dengan lahan KEK Singhasari, yang tentu akan mengangkat nilai property yang Anda miliki.'
    ]
  },
  {
    image: slideImages[1],
    title: 'Akses Mudah',
    paragraphs: [
      'Dekat tol dan fasilitas umum untuk menunjang mobilitas harian.',
      'Lingkungan nyaman dengan pemandangan pegunungan.'
    ]
  },
  {
    image: slideImages[2],
    title: 'Fasilitas Lengkap',
    paragraphs: [
      'Dilengkapi masjid, club house, pusat kuliner, dan fasilitas olahraga.'
    ]
  },
  {
    image: slideImages[3],
    title: 'Investasi Cerdas',
    paragraphs: [
      'Prospek nilai properti meningkat seiring pengembangan kawasan.'
    ]
  }
]

import { ref, onMounted, onBeforeUnmount, nextTick, computed } from 'vue'
type GallerySlideInput = { id?: string; image?: string | null; title?: string; paragraph?: string }
type GallerySlide = { id?: string; image: string; title: string; paragraph: string }
const { data } = await useAsyncData<GallerySlideInput[]>('gallery-showcase', () => $fetch<GallerySlideInput[]>('/api/gallery-showcase'))
const slidesInput = computed<GallerySlideInput[]>(() => (Array.isArray(data.value) ? data.value : []))
const fallbackImage: string = (slideImages[0] as string) || ''
const normalizedSlides = computed<GallerySlide[]>(() =>
  slidesInput.value.map((s) => ({
    id: s.id,
    image: s.image ?? fallbackImage,
    title: s.title ?? '',
    paragraph: typeof s.paragraph === 'string' ? s.paragraph : ''
  }))
)
const safeSlides = computed<GallerySlide[]>(() => (
  normalizedSlides.value.length
    ? normalizedSlides.value
    : (defaultSlides.map((d) => ({ image: d.image, title: d.title, paragraph: d.paragraphs.join('\n\n') })) as GallerySlide[])
))
const current = ref(0)
const next = () => { current.value = (current.value + 1) % safeSlides.value.length }
const prev = () => { current.value = (current.value - 1 + safeSlides.value.length) % safeSlides.value.length }

const currentSlide = computed<GallerySlide>(() => {
  const list = safeSlides.value
  if (!list.length) {
    return { image: fallbackImage, title: '', paragraph: '' }
  }
  const index = current.value % list.length
  const s = list[index] as GallerySlide
  return s
})

let touchX: number | null = null
const onTouchStart = (e: TouchEvent) => {
  const first = e.changedTouches?.[0]
  if (!first) return
  touchX = first.clientX
}
const onTouchEnd = (e: TouchEvent) => {
  if (touchX === null) return
  const first = e.changedTouches?.[0]
  if (!first) return
  const dx = first.clientX - touchX
  if (Math.abs(dx) > 30) {
    if (dx < 0) next()
    else prev()
  }
  touchX = null
}

const textPanelRef = ref<HTMLElement | null>(null)
const measureRef = ref<HTMLElement | null>(null)
const textPanelHeight = ref<number>(0)
const isMd = ref(false)

function recalc() {
  if (typeof window === 'undefined') return
  isMd.value = window.matchMedia('(min-width: 768px)').matches
  nextTick(() => {
    const measure = measureRef.value
    const panel = textPanelRef.value
    if (!measure || !panel) return
    measure.style.width = panel.offsetWidth + 'px'
    let max = 0
    Array.from(measure.children || []).forEach((child) => {
      const el = child as HTMLElement
      max = Math.max(max, el.scrollHeight)
    })
    textPanelHeight.value = max
  })
}

onMounted(() => {
  recalc()
  window.addEventListener('resize', recalc)
})
onBeforeUnmount(() => {
  if (typeof window !== 'undefined') window.removeEventListener('resize', recalc)
})

const imagePanelStyle = computed(() => {
  if (isMd.value) {
    return textPanelHeight.value
      ? { height: textPanelHeight.value + 'px' }
      : {}
  }
  return { height: '200px' }
})

const textPanelStyle = computed(() => {
  return textPanelHeight.value
    ? { height: textPanelHeight.value + 'px' }
    : {}
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .3s ease }
.fade-enter-from, .fade-leave-to { opacity: 0 }
</style>