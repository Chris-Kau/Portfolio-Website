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
<v-app-bar flat height="80px" color="background">
  <v-container class="flex mx-auto bg-(--color-primary) rounded-lg" max-width="800px" color="primary">
    <div class="flex w-100 mx-auto align-center text-white">
      <v-app-bar-title>Chris Kau</v-app-bar-title>
      <v-btn
        v-for="item in navItems"
        :key="item.id"
        variant="text"
        @click="scrollTo(item.id)"
      >
        {{ item.label }}
      </v-btn>
    </div>
  </v-container>

</v-app-bar>
</template>
