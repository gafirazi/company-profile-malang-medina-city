<template>
  <div>
    <client-only>
      <NavBar />
    </client-only>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import logo from '@/assets/img/our-products-logo.png'

useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: logo },
    { rel: 'shortcut icon', type: 'image/png', href: logo },
    { rel: 'apple-touch-icon', href: logo }
  ]
})
</script>


<style>
* {
  margin: 0;
}
</style>