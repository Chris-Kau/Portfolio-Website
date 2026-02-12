<script setup>
const props = defineProps(['project'])
</script>

<template>
  <v-container class="d-flex flex-col border pa-0 bg-(--color-primary) overflow-hidden" width="100%" height="100%">
    <v-container class="pa-0" height="600">
      <video
        v-if="project.demoFile"
        :src="`./${project.demoFile}`"
        style="width: 100%; height: 100%; object-fit: fill"
        class="pa-0"
        autoplay
        loop
        muted
        controls
      />
    </v-container>
    <v-divider class="pa-0"></v-divider>
    <v-container class="ma-0 pa-0 d-flex grow" height="100%">
      <v-card v-if="project" >
        <v-card-item class="pt-1 pl-1">
          <v-container class="d-flex flex-row align-center pa-0">
            <v-card-text class="mono text-h5 font-weight-black pt-0 pb-0 ma-0">{{
              project.name
            }}</v-card-text>
            <v-tooltip class="pa-0" text="Github" v-if="project.github" location="top">
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  class="pa-0 ma-0"
                  icon="mdi-github"
                  flat
                  size="40"
                  :href="project.github"
                ></v-btn>
              </template>
            </v-tooltip>

            <v-tooltip class="pa-0" text="External" v-if="project.extralink" location="top">
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  class="pa-0 ma-0"
                  icon="mdi-link-variant"
                  flat
                  size="40"
                  :href="project.extralink"
                ></v-btn>
              </template>
            </v-tooltip>
          </v-container>

          <v-card-item class="pb-2 pt-0" v-if="project.extra !== ''">
            <v-container class="pa-0 d-flex flex-row ga-0 align-center justify-center">
              <v-icon size="20">mdi-download</v-icon>
              <v-card-text class="sans pl-1 pa-0">{{ project.extra }}</v-card-text>
            </v-container>
          </v-card-item>

          <v-card-text class="sans pt-0 pb-1">{{ project.description }}</v-card-text>
        </v-card-item>

        <v-divider></v-divider>
        <v-container class="d-flex flex-row align-center flex-wrap ga-2 pt-1">
          <v-chip
            class="sans skill-chip opacity-90"
            v-for="skill in project.skills"
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
    </v-container>
  </v-container>
</template>

<style scoped>
.skill-chip :deep(.v-chip__content) {
  color: var(--color-supportingaccent);
}
</style>
