<template>
  <section class="bg-white py-16 text-gray-900">
    <div class="mx-auto max-w-6xl px-6 text-center">
      <h2 class="font-serif text-5xl font-semibold tracking-wide text-brand-greenDark">ARTIKEL KAMI</h2>
      <p class="mt-2 font-sans text-sm">Kami telah berkarya di property syariah sejak tahun 2015</p>

      <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <article
          v-for="a in topArticles"
          :key="a.id"
          class="overflow-hidden rounded-2xl bg-brand-greenDark text-brand-cream shadow"
        >
          <div class="aspect-[16/10] w-full overflow-hidden">
            <img :src="a.coverImage || img" alt="artikel" class="h-full w-full object-cover" />
          </div>
          <div class="px-5 pb-6 pt-4 text-left">
            <p class="text-xs text-brand-cream/80">{{ formatDate(a.publishedAt) }}</p>
            <h3 class="mt-2 font-sans text-base font-extrabold uppercase tracking-wide">{{ a.title }}</h3>
            <p class="mt-3 line-clamp-5 text-sm leading-6 text-brand-cream/90">{{ a.excerpt }}</p>
            <div class="mt-4">
              <NuxtLink :to="`/artikel/${a.slug}`" class="block w-full rounded-full bg-[#FCD34D] px-4 py-2 text-center text-sm font-semibold text-[#0B1511]">
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

type ArticleCard = {
  id: string
  slug: string
  title: string
  excerpt: string
  coverImage: string | null
  publishedAt: string | null
}

const { data } = await useAsyncData('home-articles', () => $fetch<ArticleCard[]>('/api/articles'))
const articles = computed(() => data.value ?? [])
const topArticles = computed(() => articles.value.slice(0, 3))

const formatDate = (iso: string | null) => {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })
}
</script>

<style scoped>
</style>