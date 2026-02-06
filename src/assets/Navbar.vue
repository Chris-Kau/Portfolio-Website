<script setup>
const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const scrollTo = (id) => {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
<v-app-bar elevation="3" height="85" color="primary">
      <v-container class="sans flex align-center" max-width="1400">
          <v-app-bar-title class="mono text-h5 font-weight-semibold text-(--color-secondary)">
            Chris Kau
          </v-app-bar-title>
        <v-btn
          v-for="item in navItems"
          :key="item.id"
          @click="scrollTo(item.id)"
          class="font-weight-regular"
        >
          {{ item.label }}
        </v-btn>
      </v-container>
</v-app-bar>
</template>