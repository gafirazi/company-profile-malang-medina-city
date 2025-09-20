<template>
  <section class="relative">
    <!-- Placeholder hero; replace images/text to match design exactly -->
    <div class="relative h-[540px] w-full overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${heroBg})` }"></div>
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-56" :style="bottomBlendStyle"></div>

      <div class="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col items-start justify-start gap-6 px-4 pt-16 md:flex-row md:items-center md:justify-between md:pt-0">
        <div class="text-white max-w-xl">
          <p class="text-2xl md:text-4xl font-bold">HOT PROMO</p>
          <h1 class="mt-1 text-4xl md:text-7xl font-extrabold">DISKON <span class="text-amber-300">SPESIAL</span><br/>KEMERDEKAAN</h1>
          <p class="mt-2 text-base md:text-lg opacity-90">kuota sangat terbatas, berlaku hanya untuk 20 rumah pertama bulan ini</p>
        </div>

        <form @submit.prevent="handleSubmit" class="w-full md:w-[360px] rounded-xl border border-white/30 bg-white/10 p-4 shadow-lg backdrop-blur">
          <p class="text-sm font-semibold text-brand-cream">Untuk info lanjut & penawaran terbaik</p>
          <input v-model="formData.name" name="name" class="mt-3 w-full rounded-md border border-white/30 bg-white/20 px-3 py-2 text-sm text-white placeholder:text-white/70" placeholder="Nama" required />
          <input v-model="formData.phone" name="phone" class="mt-2 w-full rounded-md border border-white/30 bg-white/20 px-3 py-2 text-sm text-white placeholder:text-white/70" placeholder="No. HP/Whatsapp" required />
          <input v-model="formData.domicile" name="domicile" class="mt-2 w-full rounded-md border border-white/30 bg-white/20 px-3 py-2 text-sm text-white placeholder:text-white/70" placeholder="Domisili" required />
          <button type="submit" :disabled="isSubmitting" class="mt-4 w-full rounded-full bg-amber-300 py-2 font-extrabold text-[#0B1511]" :class="{ 'opacity-70 cursor-not-allowed': isSubmitting }">
            {{ isSubmitting ? 'Mengirim...' : 'Kirim' }}
          </button>
          <p v-if="message" class="mt-2 text-xs text-emerald-200">{{ message }}</p>
          <p v-if="error" class="mt-2 text-xs text-rose-200">{{ error }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import heroBg from '@/assets/img/footer.png'
const bottomBlendStyle = {
  background:
    'linear-gradient(to bottom, rgba(16, 26, 21, 0) 0%, rgba(16, 26, 21, 0.75) 60%, rgb(16, 26, 21) 85%, rgb(16, 26, 21) 100%)'
}

const WEBHOOK_URL = 'https://script.google.com/macros/library/d/1wiv5APEiQmNd9DNtfPOTM4bERANWeHuPSov5HXyA8BU6tpcvTOBuQFLG/10'

const formData = ref({
  name: '',
  phone: '',
  domicile: ''
})

const isSubmitting = ref(false)
const message = ref<string | null>(null)
const error = ref<string | null>(null)

const handleSubmit = async () => {
  if (isSubmitting.value) return
  isSubmitting.value = true
  message.value = null
  error.value = null
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.value.name,
        phone: formData.value.phone,
        domicile: formData.value.domicile,
        source: 'HeroSection'
      })
    })

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`)
    }

    message.value = 'Terima kasih! Data berhasil dikirim.'
    formData.value = { name: '', phone: '', domicile: '' }
  } catch (e) {
    error.value = 'Maaf, terjadi kesalahan. Silakan coba lagi.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
