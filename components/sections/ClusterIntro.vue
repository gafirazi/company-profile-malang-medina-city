<template>
  <section class="bg-brand-greenDark py-16 text-white">
    <div class="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2">
      <div>
        <div class="aspect-[16/10] w-full overflow-hidden rounded-sm ring-1 ring-white/10">
          <img :src="content.image || clusterImg" alt="Cluster Lateefa & Syakeera" class="h-full w-full object-cover" />
        </div>
      </div>
      <div>
        <h2 class="font-serif text-4xl font-semibold leading-tight text-brand-cream">{{ content.title || 'Cluster Lateefa & Syakeera' }}</h2>
        <p class="mt-3 font-sans text-sm italic text-brand-cream/80">{{ content.tagline || 'Beragam kebutuhan. Semua terjawab di Malang Medina Cityberagam kebutuhan. semua terjawab di malang medina city' }}</p>
        <p class="mt-6 font-sans text-[15px] leading-7 text-white/85 whitespace-pre-line">{{ content.desc1 || fallbackDesc1 }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import clusterImg from '@/assets/img/cluster-intro.png'

type ClusterIntro = {
  title?: string
  tagline?: string
  desc1?: string
  desc2?: string
  image?: string | null
}

const { data } = await useAsyncData<ClusterIntro>('cluster-intro', () => $fetch<ClusterIntro>('/api/cluster-intro'))
const content = computed<ClusterIntro>(() => data.value || {})

const fallbackDesc1 = 'Menghadirkan tempat tinggal yang menyelaraskan nilai islami, desain arsitektur modern dan lingkungan asri yang terjaga nyaman dilengkapi dengan view gunung Arjuna yang menawan. Kami menyediakan beberapa pilihan konsep hunian, mulai dari inner garden, split level, expandable house, hingga konsep villa, yang dapat mengakomodir beragam kebutuhan keluarga Anda.'
const fallbackDesc2 = 'Desain kami memaksimalkan pencahayaan dan penghawaan alami, sehingga hunian semakin sehat, nyaman, dan serasa sedang healing. Segera miliki hunian berkelas yang menjadi pilihan cerdas, investasi halal untuk masa depan penuh berkah.'
</script>

