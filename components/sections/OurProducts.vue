<template>
  <section id="produk" class="bg-brand-greenDark py-16 text-white">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ProductCard v-if="firstProduct" :img="firstProduct.image || productImg" />
        <div class="order-first flex items-center justify-center bg-brand-green p-8 md:order-none">
          <div class="text-center">
            <img :src="logo" alt="Malang Medina City" class="mx-auto h-20 w-auto" />
            <h3 class="mt-6 font-serif text-4xl font-semibold tracking-wide text-brand-cream">PRODUK KAMI</h3>
            <p class="mt-2 font-sans text-sm text-brand-cream">beragam konsep desain hunian</p>
          </div>
        </div>
        <ProductCard v-for="p in restProducts" :key="p.id" :img="p.image || productImg" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductCard from './OurProductsCard.vue'
import logo from '@/assets/img/our-products-logo.webp'

type Product = { id: string; image: string | null; title?: string; subtitle?: string }
const { data } = await useAsyncData<Product[]>('products', () => $fetch<Product[]>('/api/products'))
const products = computed(() => (data.value && data.value.length ? data.value : [
  { id: '1', image: '' },
  { id: '2', image: '' },
  { id: '3', image: '' },
  { id: '4', image: '' },
  { id: '5', image: '' }
]))

const firstProduct = computed(() => products.value[0])
const restProducts = computed(() => products.value.slice(1))

</script>

<style scoped>

</style>