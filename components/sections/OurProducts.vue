<template>
  <section class="bg-brand-greenDark py-16 text-white">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ProductCard :img="productImg" />
        <div class="order-first flex items-center justify-center bg-brand-green p-8 md:order-none">
          <div class="text-center">
            <img :src="logo" alt="Malang Medina City" class="mx-auto h-20 w-auto" />
            <h3 class="mt-6 font-serif text-4xl font-semibold tracking-wide text-brand-cream">PRODUK KAMI</h3>
            <p class="mt-2 font-sans text-sm text-brand-cream">beragam konsep desain hunian</p>
          </div>
        </div>
        <ProductCard :img="productImg" />
        <ProductCard :img="productImg" />
        <ProductCard :img="productImg" />
        <ProductCard :img="productImg" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductCard from './OurProductsCard.vue'
import logo from '@/assets/img/our-products-logo.png'
import productImg from '@/assets/img/our-products-1.png'

</script>

<style scoped>

</style>