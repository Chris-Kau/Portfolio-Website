<script setup>
defineProps(["company", "date", "role", "description", "skills"]);
</script>

<template>
  <v-card
    class="mx-auto"
    width="400"
    color="secondary"
    append-icon="mdi-open-in-new"
    variant="elevated"
    elevation="3"
  >
    <template v-slot:subtitle> {{ role }} • {{ date }} </template>
    <template v-slot:title>
      <span class="mono font-weight-black">{{ company }}</span>
    </template>
    <v-card-text
      class="sans pt-4 h-full"
      style="background-color: var(--color-primary); color: var(--color-paragraph-text)"
    >
      {{ description }}
    </v-card-text>
    <v-divider />
    <v-container
      class="d-flex flex-row flex-wrap ga-2"
      style="background-color: var(--color-primary)"
    >
      <v-chip
        class="sans skill-chip opacity-90"
        v-for="skill in skills"
        :key="skill"
        color="ck-accent"
        text-color="ck-supportingaccent"
        variant="flat"
        label
      >
        {{ skill }}
      </v-chip>
    </v-container>
  </v-card>
</template>

<style scoped>
.skill-chip :deep(.v-chip__content) {
  color: var(--color-supportingaccent);
}
</style>
