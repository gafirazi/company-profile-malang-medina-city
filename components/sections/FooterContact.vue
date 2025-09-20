<template>
  <footer class="relative text-white">
    <div
      class="absolute inset-0"
      :class="!props.useSolidBg ? 'bg-cover bg-center' : ''"
      :style="props.useSolidBg ? { backgroundColor: '#0e1813' } : { backgroundImage: `url(${footerBg})` }"
    ></div>
    <!-- Top white gradient to blend with previous section -->
    <div v-if="!props.useSolidBg" class="absolute inset-0" :style="gradientStyle"></div>
    <!-- Subtle overall haze -->
    <div v-if="!props.useSolidBg" class="absolute inset-0 bg-white/10"></div>

    <div class="relative mx-auto max-w-6xl px-6 py-14">
      <div class="grid grid-cols-1 items-end gap-6 md:grid-cols-3">
        <!-- Left: form -->
        <div class="md:col-span-2">
          <h3 class="font-sans text-2xl font-extrabold lowercase tracking-wide">kemitraan marketing</h3>
          <form class="mt-4 flex flex-wrap items-center gap-3">
            <input
              v-model="formData.name"
              type="text"
              placeholder="Nama"
              class="h-11 min-w-[240px] flex-1 rounded-full bg-white/80 px-4 text-sm text-[#0B1511] placeholder:text-[#0B1511]/60 focus:outline-none"
            />
            <input
              v-model="formData.phone"
              type="text"
              placeholder="No. HP/Whatsapp"
              class="h-11 min-w-[240px] flex-1 rounded-full bg-white/80 px-4 text-sm text-[#0B1511] placeholder:text-[#0B1511]/60 focus:outline-none"
            />
            <button type="button" @click="handleSubmit" :disabled="isSubmitting" class="h-11 rounded-full bg-white px-6 text-sm font-semibold text-[#0B1511]">
              {{ isSubmitting ? 'Mengirim...' : 'Kirim' }}
            </button>
            <p v-if="message" class="mt-2 text-xs text-emerald-200">{{ message }}</p>
            <p v-if="error" class="mt-2 text-xs text-rose-200">{{ error }}</p>
          </form>
        </div>

        <!-- Right: logo and socials -->
        <div class="flex flex-col items-end gap-3">
          <img :src="logo" alt="Logo" class="h-16 w-auto" style="filter: brightness(0) invert(1);" />
          <div class="mt-2 flex items-center gap-4 text-white">
            <Icon name="mdi:facebook" size="22" />
            <Icon name="mdi:instagram" size="22" />
            <Icon name="mdi:whatsapp" size="22" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import footerBg from '@/assets/img/footer.png'
import logo from '@/assets/img/our-products-logo.png'

const props = withDefaults(defineProps<{ useSolidBg?: boolean }>(), { useSolidBg: false })

const gradientStyle = {
  background:
    'linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 20%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0.15) 70%, rgba(255,255,255,0) 100%)'
}

const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwkgy85Dw7gJ4V2-23ga6f6t36XEKx5CWX0O2OPffv4Z-hL-lh34NaT1w6dlNbg2uZB/exec'

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
    const response = await fetch(`${WEBHOOK_URL}?nama=${formData.value.name}&nomor_telepon=${formData.value.phone}&type=kemitraan`)

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

