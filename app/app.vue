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
</script>


<style>
* {
  margin: 0;
}
</style>