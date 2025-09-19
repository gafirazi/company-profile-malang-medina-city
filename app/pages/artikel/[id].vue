<template>
  <div class="bg-[#0e1813] min-h-screen text-brand-cream">
    <section class="pt-24 pb-14">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div class="space-y-4">
            <h1 class="font-serif text-4xl font-semibold uppercase tracking-wide">{{ title }}</h1>
            <p class="text-sm text-brand-cream/80">5 Agustus 2025</p>
            <div class="space-y-4 text-sm leading-7 text-brand-cream/90">
              <p>
                Jembatan berjarak kurang lebih 50m dari sumber air desa lang-lang & dirancang menggunakan konstruksi CSP yang
                mulai banyak digunakan pada proyek jembatan & jalan tol. embatan dirancang menggunakan konstruksi CSP yang mulai
                banyak digunakan pada proyek jembatan & jalan tol
              </p>
              <p>
                CSP merupakan inovasi struktur baja plat yang dimodifikasi dengan bentuk bergelombang sehingga kekuatan strukturnya
                meningkat hingga 50 kali lipat.
              </p>
              <p>
                CSP yang merupakan produk rakitan ini, memiliki struktur kuat dengan durabilitas tinggi. Hal ini membuat proses
                pengerjaan di lokasi proyek sangat minim dan bersih karena hanya terdapat kegiatan instalasi dan finishing sehingga
                lebih cepat dalam proses pelaksanaannya
              </p>
            </div>
            <div class="pt-2">
              <NuxtLink to="/list-artikel" class="inline-flex items-center rounded-full bg-brand-cream px-5 py-2 text-sm font-semibold text-[#0B1511]">
                BACK
              </NuxtLink>
            </div>
          </div>
          <div class="space-y-6">
            <div class="overflow-hidden rounded-2xl">
              <img :src="img1" alt="artikel" class="h-full w-full object-cover" />
            </div>
            <div class="overflow-hidden rounded-2xl">
              <img :src="img2" alt="artikel" class="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <footer class="bg-[url('/footer.png')] bg-cover bg-center py-10 text-brand-cream">
    <div class="mx-auto max-w-6xl px-6">
      <div class="flex justify-end gap-5">
        <a href="#" aria-label="instagram" class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
          <Icon name="mdi:instagram" size="20" />
        </a>
        <a href="#" aria-label="whatsapp" class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
          <Icon name="mdi:whatsapp" size="20" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const route = useRoute()
const id = computed(() => Number(route.params.id))

const title = computed(() => {
  const titles = ['Pembangunan Jembatan', 'Akses Mudah', 'Fasilitas Lengkap']
  return titles[id.value] ?? 'Pembangunan Jembatan'
})

import img1 from '@/assets/img/portfolio-1.png'
import img2 from '@/assets/img/portfolio-2.png'
</script>

<style scoped>
</style>

