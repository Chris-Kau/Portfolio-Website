<script setup>
import logo from '@/assets/images/oshawott logo.png'
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
]

const scrollTo = (id) => {
  const container = document.querySelector('.scroll-container')
  if (!container) return
  if (id === 'about') {
    container.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  menuOpen.value = false
}

const { smAndDown } = useDisplay()
const menuOpen = ref(false)
</script>

<template>
  <v-app-bar elevation="3" height="60" color="primary">
    <v-container class="sans d-flex align-center">
      <v-app-bar-title>
        <div class="d-flex flex-row align-center">
          <v-img
            :src="logo"
            width="32"
            height="32"
            class="mr-2 flex-shrink-0 flex-grow-0 flip-x"
            contain
            alt="Oshawott logo"
          />
          <span class="mono text-h5">Chris Kau</span>
        </div>
      </v-app-bar-title>
      <!-- Desktop: normal buttons -->
      <div v-if="!smAndDown" class="d-flex align-center ga-2">
        <v-btn
          v-for="item in navItems"
          :key="item.id"
          @click="scrollTo(item.id)"
          color="ck-accent"
          class="sans"
        >
          {{ item.label }}
        </v-btn>
      </div>

      <!-- Mobile: hamburger menu -->
      <v-menu v-else v-model="menuOpen" location="bottom end" offset="8">
        <template #activator="{ props }">
          <v-btn v-bind="props" icon variant="text" aria-label="Open navigation">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list density="comfortable" min-width="180">
          <v-list-item
            v-for="item in navItems"
            :key="item.id"
            @click="scrollTo(item.id)"
          >
            <v-list-item-title class="sans">
              {{ item.label }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.flip-x {
  transform: scaleX(-1);
}

/* prevents title area from hogging space and squishing the right side */
.title-wrap :deep(.v-toolbar-title__placeholder) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
