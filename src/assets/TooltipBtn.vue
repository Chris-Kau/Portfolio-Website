<template>
  <v-tooltip class="pa-0" :text="text" :location="location">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        size="50"
        class="social-icons bg-transparent"
        variant="text"
        :href="link"
        :aria-label="aria"
        target="_blank"
      >
        <v-icon size="50">{{ icon }}</v-icon>
      </v-btn>
    </template>
  </v-tooltip>
</template>

<script setup>
defineProps(["location", "text", "icon", "link", "aria"]);
</script>

<style scoped>
.social-icons .v-icon {
  color: var(--color-secondary);
  transition: color 0.2s easy, transform 0.2s ease;
}

.social-icons .v-btn:hover .v-icon {
  color: var(--color-primary);
  transform: scale(1.1);
}
</style>
