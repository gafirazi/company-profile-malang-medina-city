<template>
  <section class="relative">
    <!-- Placeholder hero; replace images/text to match design exactly -->
    <div class="relative h-[540px] w-full overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${heroBg})` }"></div>
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-56" :style="bottomBlendStyle"></div>

      <div class="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col items-start justify-start gap-6 px-4 pt-16 md:flex-row md:items-center md:justify-between md:pt-0">
        <div class="text-white max-w-xl">
          <p class="text-2xl md:text-4xl font-bold">HOT PROMO</p>
          <h1 class="mt-1 text-4xl md:text-7xl font-extrabold">DISKON <span class="text-amber-300">SPESIAL</span><br/>KEMERDEKAAN</h1>
          <p class="mt-2 text-base md:text-lg opacity-90">kuota sangat terbatas, berlaku hanya untuk 20 rumah pertama bulan ini</p>
        </div>

        <form class="w-full md:w-[360px] rounded-xl border border-white/30 bg-white/10 p-4 shadow-lg backdrop-blur">
          <p class="text-sm font-semibold text-brand-cream">Untuk info lanjut & penawaran terbaik</p>
          <input class="mt-3 w-full rounded-md border border-white/30 bg-white/20 px-3 py-2 text-sm text-white placeholder:text-white/70" placeholder="Nama" />
          <input class="mt-2 w-full rounded-md border border-white/30 bg-white/20 px-3 py-2 text-sm text-white placeholder:text-white/70" placeholder="No. HP/Whatsapp" />
          <input class="mt-2 w-full rounded-md border border-white/30 bg-white/20 px-3 py-2 text-sm text-white placeholder:text-white/70" placeholder="Domisili" />
          <button type="button" class="mt-4 w-full rounded-full bg-amber-300 py-2 font-extrabold text-[#0B1511]">Kirim</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import heroBg from '@/assets/img/footer.png'
const bottomBlendStyle = {
  background:
    'linear-gradient(to bottom, rgba(16, 26, 21, 0) 0%, rgba(16, 26, 21, 0.75) 60%, rgb(16, 26, 21) 85%, rgb(16, 26, 21) 100%)'
}
</script>
