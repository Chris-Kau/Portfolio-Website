<template>
  <v-tooltip class="pa-0" :text="text" :location="location" flat>
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        size="50"
        class="project-social-icons"
        variant="text"
        :href="link"
        :aria-label="aria"
        target="_blank"
        flat
      >
        <v-icon :size="size">{{ icon }}</v-icon>
      </v-btn>
    </template>
  </v-tooltip>
</template>

<script setup>
defineProps(["location", "text", "icon", "link", "aria", "size"]);
</script>

<style scoped>
.project-social-icons .v-icon {
  color: white !important;
  transition: color 0.2s easy, transform 0.2s ease !important;
}

.project-social-icons .v-btn:hover .v-icon {
  color: var(--color-primary) !important;
  transform: scale(1.1) !important;
}
</style>
