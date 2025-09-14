<template>
  <section class="bg-brand-greenDark py-16 text-white">
    <div class="mx-auto max-w-6xl px-6 text-center">
      <h2 class="font-serif text-5xl font-semibold tracking-wide text-brand-cream">TESTIMONI</h2>
      <p class="mt-1 font-sans text-sm text-brand-cream">kata mereka tentang kami</p>

      <div class="mx-auto mt-8 max-w-4xl">
        <div class="relative">
          <transition name="fade" mode="out-in">
            <div :key="current" class="px-4 py-4">
              <p class="font-sans text-lg leading-8 text-brand-cream">
                “{{ slides[current].quote }}”
              </p>
              <p class="mt-6 font-sans text-base font-semibold text-brand-cream/90">{{ slides[current].author }}</p>
            </div>
          </transition>

          <!-- arrows -->
          <button
            type="button"
            class="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white hover:bg-black/35 flex"
            @click="prev"
            aria-label="Previous testimonial"
          >
            <Icon name="mdi:chevron-left" size="28" />
          </button>
          <button
            type="button"
            class="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white hover:bg-black/35 flex"
            @click="next"
            aria-label="Next testimonial"
          >
            <Icon name="mdi:chevron-right" size="28" />
          </button>
        </div>

        <div class="mt-6 flex justify-center gap-2">
          <button
            v-for="(s, i) in slides"
            :key="i"
            class="h-2 w-2 rounded-full"
            :class="i === current ? 'bg-brand-cream' : 'bg-white/30'"
            @click="go(i)"
            aria-label="Go to testimonial"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slides = [
  {
    quote:
      'Saya puas dengan kualitas bangunan yang diserah terimakan, proses pembayaran mudah dan sesuai dengan syariat Islam, jadinya tidak perlu khawatir lagi',
    author: 'Bapak Syaiful - Surabaya'
  },
  {
    quote:
      'Lokasi strategis, akses dekat kemana saja, hunian nyaman untuk keluarga kami.',
    author: 'Ibu Rina - Malang'
  },
  {
    quote:
      'Timnya responsif dan profesional, proses dari booking sampai serah terima lancar.',
    author: 'Bapak Adi - Sidoarjo'
  }
]

const current = ref(0)
let timer: ReturnType<typeof setInterval> | null = null
const next = () => (current.value = (current.value + 1) % slides.length)
const prev = () => (current.value = (current.value - 1 + slides.length) % slides.length)
const go = (i: number) => (current.value = i)

onMounted(() => {
  timer = setInterval(next, 4000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .3s ease }
.fade-enter-from, .fade-leave-to { opacity: 0 }
</style>