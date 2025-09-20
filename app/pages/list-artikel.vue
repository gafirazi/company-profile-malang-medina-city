<template>
  <div class="bg-[#0e1813] min-h-screen">
    <section class="pt-24 pb-10 text-brand-cream">
      <div class="mx-auto max-w-6xl px-6 text-center">
        <h1 class="mt-2 font-serif text-5xl font-semibold tracking-wide">Artikel Kami</h1>

        <div class="mt-10 grid grid-cols-1 gap-12 md:grid-cols-3">
          <article
            v-for="a in articles"
            :key="a.id"
            class="overflow-hidden rounded-[30px] bg-white text-[#0B1511] shadow"
          >
            <div class="aspect-[16/10] w-full overflow-hidden">
              <img :src="a.coverImage || img" alt="artikel" class="h-full w-full object-cover" />
            </div>
            <div class="px-5 pb-6 pt-4 text-left">
              <p class="text-xs text-[#0B1511]/80">{{ formatDate(a.publishedAt) }}</p>
              <h3 class="mt-2 font-serif text-2xl font-semibold uppercase tracking-wide">{{ a.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-[#0B1511]/90">{{ a.excerpt }}</p>
              <div class="mt-6 flex justify-center">
                <NuxtLink :to="`/artikel/${a.slug}`" class="rounded-full bg-brand-greenDark px-6 py-3 text-sm font-semibold text-brand-cream">
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

type ArticleCard = {
  id: string
  slug: string
  title: string
  excerpt: string
  coverImage: string | null
  publishedAt: string | null
}

const { data } = await useAsyncData('articles', () => $fetch<ArticleCard[]>('/api/articles'))
const articles = computed(() => data.value ?? [])

const formatDate = (iso: string | null) => {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })
}
</script>

<style scoped>
</style>

