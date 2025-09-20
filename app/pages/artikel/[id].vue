<template>
  <div class="bg-[#0e1813] min-h-screen text-brand-cream">
    <section class="pt-24 pb-14">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div class="space-y-4">
            <h1 class="font-serif text-4xl font-semibold uppercase tracking-wide">{{ article?.title }}</h1>
            <p class="text-sm text-brand-cream/80">{{ formatDate(article?.publishedAt || null) }}</p>
            <div class="space-y-4 text-sm leading-7 text-brand-cream/90" v-if="htmlBody" v-html="htmlBody"></div>
            <div class="pt-2">
              <NuxtLink to="/list-artikel" class="inline-flex items-center rounded-full bg-brand-cream px-5 py-2 text-sm font-semibold text-[#0B1511]">
                BACK
              </NuxtLink>
            </div>
          </div>
          <div class="space-y-6">
            <div class="overflow-hidden rounded-2xl">
              <img :src="article?.coverImage || img1" alt="artikel" class="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <FooterContact useSolidBg />
</template>

<script setup lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
const route = useRoute()
const slug = computed(() => route.params.id as string)

type ArticleDetail = {
  id: string
  slug: string
  title: string
  excerpt: string
  body: any
  coverImage: string | null
  publishedAt: string | null
}

const { data } = await useAsyncData(`article:${slug.value}`,( ) => $fetch<ArticleDetail>(`/api/articles/${slug.value}`))
const article = computed(() => data.value)
const htmlBody = computed(() => (article.value?.body ? documentToHtmlString(article.value.body) : ''))

const formatDate = (iso: string | null) => {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })
}

import img1 from '@/assets/img/portfolio-1.png'
import img2 from '@/assets/img/portfolio-2.png'
import FooterContact from '@/components/sections/FooterContact.vue'
</script>

<style scoped>
</style>

