<script setup>
const props = defineProps(["project"]);
</script>

<template>
  <v-container
    class="d-flex flex-column border pa-0 overflow-hidden"
    style="aspect-ratio: 1/1"
  >
    <v-container class="pa-0" style="max-height: 55%; flex: 0 0 55%">
      <video
        v-if="project.demoFile"
        :src="`./${project.demoFile}`"
        style="width: 100%; height: 100%; object-fit: fill; display: block"
        class="pa-0"
        autoplay
        loop
        muted
        controls
      />
      <div
        v-else
        style="width: 100%; height: 100%; min-width: 100%; min-height: 100%; flex: 1"
      >
        Please Select a Project
      </div>
    </v-container>
    <v-divider class="pa-0"></v-divider>

    <v-container class="ma-0 pa-0 d-flex flex-column" style="flex: 1; min-height: 0">
      <v-card
        v-if="project"
        class="d-flex flex-column"
        style="
          flex: 1;
          min-height: 0;
          background-color: var(--color-primary);
          color: var(--color-paragraph-text);
        "
      >
        <!-- TOP + DESCRIPTION AREA-->
        <div class="d-flex flex-column pb-0" style="flex: 1; min-height: 0">
          <!-- Title row -->
          <v-card-item class="pt-1 pl-1 pb-0" style="flex: 0 0 auto">
            <v-container class="d-flex flex-row align-center pa-0">
              <v-card-text class="mono text-h5 font-weight-black pt-0 pb-0 ma-0">
                {{ project.name }}
              </v-card-text>

              <v-tooltip class="pa-0" text="Github" v-if="project.github" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    class="pa-0 ma-0"
                    icon="mdi-github"
                    flat
                    size="40"
                    :href="project.github"
                    style="background-color: transparent"
                  />
                </template>
              </v-tooltip>

              <v-tooltip
                class="pa-0"
                text="External"
                v-if="project.extralink"
                location="top"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    class="pa-0 ma-0"
                    icon="mdi-link-variant"
                    flat
                    size="40"
                    :href="project.extralink"
                    style="background-color: transparent"
                  />
                </template>
              </v-tooltip>
            </v-container>
          </v-card-item>

          <!-- Extra Detail -->
          <v-card-item
            class="pb-2 pt-0"
            v-if="project.extra !== ''"
            style="flex: 0 0 auto"
          >
            <v-container class="pa-0 d-flex flex-row ga-0 align-center justify-center">
              <v-icon size="20">{{ project.extraicon }}</v-icon>
              <v-card-text class="sans pl-1 pa-0">{{ project.extra }}</v-card-text>
            </v-container>
          </v-card-item>

          <v-divider class="pb-0" />

          <!-- Description -->
          <div class="thin-scroll pt-1" style="flex: 1; min-height: 0; overflow-y: auto">
            <v-card-text class="sans pt-0 pb-1">
              {{ project.description }}
            </v-card-text>
          </div>
        </div>

        <v-divider />

        <v-container
          class="thin-scroll d-flex flex-row ga-2"
          style="
            flex: 0 0 55px;
            height: 55px;
            align-items: center;
            overflow-x: auto;
            overflow-y: hidden;
            flex-wrap: nowrap;
          "
        >
          <v-chip
            v-for="skill in project.skills"
            :key="skill"
            class="sans skill-chip opacity-90"
            style="flex-shrink: 0"
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
.thin-scroll {
  scrollbar-width: thin;
}
.thin-scroll::-webkit-scrollbar {
  height: 4px;
}
</style>
