<template>
  <section class="bg-brand-greenDark py-16 text-white">
    <div class="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
      <!-- Left column: heading, metrics, small map -->
      <div>
        <h3 class="font-serif text-5xl font-semibold uppercase tracking-wide text-brand-cream">LOKASI</h3>
        <p class="mt-1 font-sans text-sm italic text-brand-cream">strategis & menguntungkan</p>

        <div class="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div v-for="(item, i) in leftMetrics" :key="`l-${i}`" class="flex items-start gap-4">
            <span class="block h-12 w-px bg-brand-cream/80" />
            <div>
              <div class="flex items-start gap-3">
                <span class="text-valuess font-serif text-2xl md:text-6xl font-semibold leading-[0] text-brand-cream">{{ item.num }}</span>
                <span class="text-labelss font-sans text-1xl md:text-3xl font-semibold leading-none lowercase text-brand-cream">menit</span>
              </div>
              <div class="mt-2 text-base text-brand-cream/80">{{ item.caption }}</div>
            </div>
          </div>
        </div>

        <div class="maps-container">
          <div class="w-full overflow-hidden rounded-sm ring-1 ring-white/10">
            <iframe
              width="100%"
              height="220"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              :src="gmapsSrc"
            />
          </div>
        </div>
      </div>

      <!-- Right column: big map, text block, socials -->
      <div class="flex flex-col">
        <div class="aspect-[16/13] w-full overflow-hidden rounded-sm ring-1 ring-white/10">
          <img :src="bigMap" alt="Lokasi KEK Singhasari" class="h-full w-full object-cover" />
        </div>
        <h4 class="mt-8 font-sans text-2xl font-extrabold text-white">
          <span class="font-extrabold">Rencana KEK Singhasari</span>
          <span class="font-normal"> bersebelahan dengan area Malang</span>
        </h4>
        <div class="mt-4 space-y-4 font-sans text-[15px] leading-7 text-white/85">
          <p>
            Medina City, dimana di area ini rencananya akan memasarkan pengembangan sektor pariwisata seperti untuk
            perhotelan, life style, travel, restoran, villa, dan lainnya. Pengembangan sektor pariwisata di sana juga
            ditautkan dengan kawasan wisata unggulan Jatim dan nasional, yakni kawasan Bromo, Tengger, Semeru
          </p>
        </div>
        <div class="mt-6 flex items-center gap-4 self-start text-white/80 md:self-end">
          <Icon name="mdi:instagram" size="20" />
          <Icon name="mdi:facebook" size="20" />
          <Icon name="mdi:whatsapp" size="20" />
        </div>
      </div>
    </div>
  </section>
  
</template>

<script setup lang="ts">
const leftMetrics = [
  { num: 10, caption: 'dari tol singosari' },
  { num: 11, caption: 'dari bentoel tbk' },
  { num: 11, caption: 'ke al mahira IIBS' },
  { num: 13, caption: 'dari ITN 2' },
  { num: 14, caption: 'ke hawaii waterpark' }
]

const gmapsSrc = 'https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Malang%20Medina%20CIty+(Malang%20Medina%20City)&t=&z=14&ie=UTF8&iwloc=B&output=embed'
import bigMap from '@/assets/img/location-highlights.png'
</script>

<style scoped>
.text-valuess {
  line-height: 0.3;
}
.text-labelss {
  line-height: inherit;
}
.maps-container {
  margin-top: 3.9rem;
}
</style>