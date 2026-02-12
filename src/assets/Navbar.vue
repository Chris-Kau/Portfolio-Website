<script setup>
import logo from "@/assets/images/oshawott logo.png";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const scrollTo = (id) => {
  const container = document.querySelector(".scroll-container");
  if (!container) return;
  if (id === "about") {
    container.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
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
          <span class="mono font-weight-semibold text-h5 text-(--color-paragraph-text)"
            >Chris Kau</span
          >
        </div>
      </v-app-bar-title>
      <v-btn
        v-for="item in navItems"
        :key="item.id"
        @click="scrollTo(item.id)"
        class="font-weight-regular"
        color="ck-accent"
      >
        {{ item.label }}
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.flip-x {
  transform: scaleX(-1);
}
</style>
