<template>
  <v-tooltip class="sans pa-0" :text="text" :location="location" flat content-class="custom-tooltip" :transition="false" close-delay="0">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        size="50"
        class="social-icons"
        variant="text"
        :href="link"
        :aria-label="aria"
        target="_blank"
        flat

      >
        <v-icon :size="size" class="hn">{{ icon }}</v-icon>
      </v-btn>
    </template>
  </v-tooltip>
</template>

<script setup>
defineProps(["location", "text", "icon", "link", "aria", "size"]);
</script>

<style scoped>
.social-icons .v-icon {
  color: var(--color-secondary) !important;
  transition: color 0.2s easy, transform 0.2s ease !important;
}

.social-icons .v-btn:hover .v-icon {
  color: var(--color-primary) !important;
  transform: scale(1.1) !important;
}
:deep(.custom-tooltip) {
  font-size: 18px !important;
  letter-spacing: 1px !important;
  border-radius: 0 !important;
}
</style>
