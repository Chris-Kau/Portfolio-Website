<script setup>
defineProps(["project"]);
const dims = 200;
</script>

<template>
  <v-card
    :width="dims"
    :max-width="dims"
    :max-height="dims"
    :height="dims"
    hover
    color="secondary"
    class="project-card pa-0 ga-0"
    style="aspect-ratio: 1/1"
  >
    <div
      class="d-flex text-center card-darken justify-center align-center mono pa-3"
      style="font-size: 20px"
    >
      {{ project.shortDescription }}
    </div>
    <v-img
      :src="`./${project.image}`"
      :height="dims"
      :width="dims"
      cover
      class="mono align-end text-white project-img"
      style="aspect-ratio: 1/1"
    >
      <div class="img-gradient">
        <v-card-title class="pa-0">
          {{ project.name }}
        </v-card-title>
      </div>
    </v-img>

    <v-card-item class="pa-0"> </v-card-item>
  </v-card>
</template>

<style scoped>
.project-card {
  position: relative;
  overflow: hidden;
}

.card-darken {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
  z-index: 1;
}

.project-card:hover .card-darken {
  opacity: 1;
}

.img-gradient {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 12px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0)
  );
}

.skill-chip :deep(.v-chip__content) {
  color: var(--color-supportingaccent);
}
</style>
