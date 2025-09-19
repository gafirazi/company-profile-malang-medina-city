<template>
  <section class="bg-white py-16 text-gray-900">
    <div class="mx-auto max-w-6xl px-6 text-center">
      <h2 class="font-serif text-5xl font-semibold tracking-wide text-brand-greenDark">ARTIKEL KAMI</h2>
      <p class="mt-2 font-sans text-sm">Kami telah berkarya di property syariah sejak tahun 2015</p>

      <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <article
          v-for="i in 3"
          :key="i"
          class="overflow-hidden rounded-2xl bg-brand-greenDark text-brand-cream shadow"
        >
          <div class="aspect-[16/10] w-full overflow-hidden">
            <img :src="img" alt="artikel" class="h-full w-full object-cover" />
          </div>
          <div class="px-5 pb-6 pt-4 text-left">
            <p class="text-xs text-brand-cream/80">5 Agustus 2025</p>
            <h3 class="mt-2 font-sans text-base font-extrabold uppercase tracking-wide">PEMBANGUNAN JEMBATAN</h3>
            <p class="mt-3 line-clamp-5 text-sm leading-6 text-brand-cream/90">
              Jembatan berjarang kurang lebih 50m dari sumber aliran sungai desa lang-lang & dirancang menggunakan konstruksi JCSP
              yang mulai banyak digunakan pada proyek jembatan 8 jalan tol. JCSP yang merupakan produk rakitan ini, memiliki struktur
              kuat dengan durabilitas tinggi.
            </p>
            <div class="mt-4">
              <NuxtLink :to="`/artikel/${i-1}`" class="block w-full rounded-full bg-[#FCD34D] px-4 py-2 text-center text-sm font-semibold text-[#0B1511]">
                READ MORE
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
      <div class="mt-8 flex justify-center">
        <NuxtLink
          to="/list-artikel"
          class="rounded-full bg-[#FCD34D] px-4 py-2 text-sm font-semibold text-[#0B1511] inline-block"
        >
          Lihat Semua Artikel
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import img from '@/assets/img/article.png'
</script>

<style scoped>
</style>