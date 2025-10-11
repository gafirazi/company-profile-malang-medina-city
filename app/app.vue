<template>
  <div>
    <client-only>
      <NavBar />
    </client-only>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <BackToTop />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import BackToTop from '@/components/BackToTop.vue'
import logo from '@/assets/img/our-products-logo.webp'

useHead({
  link: [
    { rel: 'icon', type: 'image/webp', href: logo },
    { rel: 'shortcut icon', type: 'image/webp', href: logo },
    { rel: 'apple-touch-icon', href: logo }
  ]
})
</script>


<style>
* {
  margin: 0;
}
</style>