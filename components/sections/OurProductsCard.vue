<template>
  <div class="bg-white">
    <div class="aspect-[16/10] w-full">
      <img :src="img" alt="product" class="w-full object-contain" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  img: string
  title?: string
  subtitle?: string
  stats?: { bed: number; bath: number; car: number }
}>()
</script>

