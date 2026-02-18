<script setup>
import ProjectTooltipBtn from './ProjectTooltipBtn.vue'
defineProps(['company', 'date', 'role', 'description', 'skills', 'link'])
</script>

<template>
  <v-card
    class="vcardhover mx-auto"
    width="415"
    flat
    style="
      color: white;
      background-color: transparent;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    "
    rounded="0"
  >
    <!-- Title + Subtitle -->
    <template #title>
      <div class="d-flex justify-space-between flex-row align-center pb-0">
        <div class="mono text-h4">
          {{ company }}
        </div>
        <div class="project-social-icons" style="color: white">
          <ProjectTooltipBtn
            text="External"
            location="top"
            :link="link"
            icon="hn-external-link"
          />
        </div>
      </div>
    </template>

    <template #subtitle>
      <span class="sans" style="font-size:16px">{{ role }} • {{ date }}</span>
    </template>

    <!-- Description -->
    <v-container
      class="sans pt-4"
      style="color: var(--color-paragraph-text); background-color: transparent; font-size: 16px"
    >
      {{ description }}
    </v-container>

    <v-divider style="color: var(--color-secondary)" />

    <!-- Skills -->
    <v-container class="thin-scroll d-flex flex-row ga-2" style="background-color: transparent; overflow-x: auto">
      <v-chip
        v-for="skill in skills"
        :key="skill"
        class="sans skill-chip opacity-90 flex-shrink-0"
        color="ck-accent"
        variant="flat"
        label
        style="font-size:16px"
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
.thin-scroll {
  scrollbar-width: thin;
}
.thin-scroll::-webkit-scrollbar {
  height: 4px;
}
</style>
