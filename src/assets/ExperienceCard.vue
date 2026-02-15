<script setup>
defineProps(["company", "date", "role", "description", "skills"]);
</script>

<template>
  <v-card
    class="vcardhover mx-auto"
    width="400"
    append-icon="mdi-open-in-new"
    flat
    style="
      color: white;
      background-color: transparent;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    "
  >
    <!-- Title + Subtitle -->
    <template #title>
      <span class="mono text-h5">
        {{ company }}
      </span>
    </template>

    <template #subtitle>
      <span class="sans" style="font-size: 16px">{{ role }} • {{ date }}</span>
    </template>

    <!-- Description -->
    <v-container
      class="sans pt-4"
      style="color: var(--color-paragraph-text); background-color: transparent"
    >
      {{ description }}
    </v-container>

    <v-divider style="color: var(--color-secondary)" />

    <!-- Skills -->
    <v-container
      class="d-flex flex-row flex-wrap ga-2"
      style="background-color: transparent"
    >
      <v-chip
        v-for="skill in skills"
        :key="skill"
        class="sans skill-chip opacity-90"
        color="ck-accent"
        variant="flat"
        label
      >
        {{ skill }}
      </v-chip>
    </v-container>
  </v-card>
</template>

<style scoped>
/* Style ONLY the header section (title + subtitle container) */
:deep(.v-card-item) {
  background-color: var(--color-secondary);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

/* Optional: adjust text color inside header if needed */
:deep(.v-card-title),
:deep(.v-card-subtitle) {
  color: white; /* or your preferred color */
}

/* Skill chip text override */
.skill-chip :deep(.v-chip__content) {
  color: var(--color-supportingaccent);
}

.vcardhover {
  border-radius: 8px;
  border: 1px solid var(--color-primary);
  transition: border 0.2s;
}
.vcardhover:hover {
  border: 1px solid var(--color-secondary);
}
</style>
