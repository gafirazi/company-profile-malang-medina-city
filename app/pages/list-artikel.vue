<template>
  <div class="bg-[#0e1813] min-h-screen">
    <section class="pt-24 pb-10 text-brand-cream">
      <div class="mx-auto max-w-6xl px-6 text-center">
        <h1 class="mt-2 font-serif text-5xl font-semibold tracking-wide">Artikel Kami</h1>

        <div class="mt-10 grid grid-cols-1 gap-12 md:grid-cols-3">
          <article
            v-for="i in 3"
            :key="i"
            class="overflow-hidden rounded-[30px] bg-white text-[#0B1511] shadow"
          >
            <div class="aspect-[16/10] w-full overflow-hidden">
              <img :src="img" alt="artikel" class="h-full w-full object-cover" />
            </div>
            <div class="px-5 pb-6 pt-4 text-left">
              <p class="text-xs text-[#0B1511]/80">5 Agustus 2025</p>
              <h3 class="mt-2 font-serif text-2xl font-semibold uppercase tracking-wide">PEMBANGUNAN JEMBATAN</h3>
              <p class="mt-3 text-sm leading-6 text-[#0B1511]/90">
                Jembatan berjarang kurang lebih 50m dari sumber air desa lang-lang & dirancang menggunakan konstruksi CSP yang mulai banyak
                digunakan pada proyek jembatan & jalan tol.
              </p>
              <div class="mt-6 flex justify-center">
                <NuxtLink :to="`/artikel/${i-1}`" class="rounded-full bg-brand-greenDark px-6 py-3 text-sm font-semibold text-brand-cream">
                  READ MORE
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    <FooterContact useSolidBg />
  </div>
</template>

<script setup lang="ts">
import img from '@/assets/img/article.png'
import FooterContact from '@/components/sections/FooterContact.vue'
</script>

<style scoped>
</style>

