<script setup lang="ts">
import Navbar from './assets/Navbar.vue'
import { ref } from 'vue'
import Projects from '@/assets/data/Projects.json'
import ExperienceCard from './assets/ExperienceCard.vue'
import WorkExperienceData from '@/assets/data/WorkExperiences.json'
import ProjectCard from './assets/ProjectCard.vue'
import ProjectViewBox from './assets/ProjectViewBox.vue'
import TooltipBtn from './assets/TooltipBtn.vue'
const currentProjectView = ref({})
const setProjectView = (project) => {
  currentProjectView.value = project
}
</script>
<template>
  <v-app class="pa-0">
    <Navbar />
    <div class="scroll-container pt-0 pb-0">
      <v-row no-gutters class="d-flex">
        <v-col cols="2"> </v-col>

        <v-col cols="8">
          <v-main style="padding: 0 24px; margin: 0 auto">
            <section id="about">
              <v-container class="d-flex align-center pb-10">
                <div class="sans flex-1" style="max-width: 600px">
                  <div>
                    <p
                      class="sans ml-1"
                      style="
                        color: var(--color-text);
                        background-color: var(--color-accent);
                        width: fit-content;
                        font-size: 18px;
                      "
                    >
                      Software Engineer
                    </p>
                    <p class="sans font-weight-semibold" style="font-size: 36px">
                      <span style="color: var(--color-secondary)">Hello, I'm </span>
                      <span style="color: var(--color-text)">Chris Kau</span>
                    </p>
                    <p
                      class="sans pt-2 max-w-130"
                      style="color: var(--color-secondary); font-size: 18px"
                    >
                      I'm a student at California State University of Long Beach and a
                      <span style="color: var(--color-text); background-color: var(--color-accent)">
                        Part-Time SWE</span
                      >
                      @ <a class="ahref" href="https://g2ss.com/">G2 Software Systems </a>. Being
                      able to create software that has an impact on users is what keeps me going!
                    </p>
                  </div>
                  <v-container class="social-icons d-flex flex-row ga-md-7 ps-1">
                    <v-tooltip class="pa-0" location="bottom" text="Resume">
                      <template v-slot:activator="{ props }">
                        <v-btn
                          v-bind="props"
                          height="50"
                          class="resume-btn text-white"
                          variant="tonal"
                        >
                          View Resume
                          <v-icon size="20" class="ms-2 text-white"> mdi-file-document </v-icon>
                        </v-btn>
                      </template>
                    </v-tooltip>

                    <TooltipBtn
                      text="Github"
                      location="bottom"
                      link="https://github.com/Chris-Kau"
                      icon="mdi-github"
                      size="50"
                    />
                    <TooltipBtn
                      text="LinkedIn"
                      location="bottom"
                      link="https://www.linkedin.com/in/chris-kau/"
                      icon="mdi-linkedin"
                      size="50"
                    />
                    <TooltipBtn
                      text="chriskau04@gmail.com"
                      location="bottom"
                      link="mailto:chriskau04@gmail.com?subject=Portfolio%20Contact"
                      icon="mdi-email"
                      size="50"
                    />
                  </v-container>
                </div>
                <div class="image-wrapper">
                  <img
                    src="./assets/images/oshawott shadow.png"
                    class="shadow-overlay mt-7 ml-6"
                    alt=""
                    aria-hidden="true"
                    style="width: 100%"
                  />
                  <img
                    src="./assets/images/about oshawott.png"
                    class="main-img"
                    alt="Oshawott illustration"
                    style="width: 100%"
                  />
                </div>
              </v-container>
            </section>

            <section id="experience">
              <v-container class="pa-0 pb-10">
                <p
                  class="mono font-weight-black text-left"
                  style="color: var(--color-secondary); font-size: 36px"
                >
                  <span class="d-flex align-center ga-2">
                    <v-icon size="25">mdi-desktop-classic</v-icon>
                    Work Experience
                  </span>
                </p>
                <v-container
                  class="d-flex flex-row align-center justify-center pa-0"
                  style="max-width: 100%; width: 100%"
                >
                  <div
                    class="justify-center d-flex flex-row"
                    style="
                      max-width: 100%;
                      width: 100%;
                      flex: 0 0 auto;
                      overflow-x: auto;
                      overflow-y: hidden;
                    "
                  >
                    <v-timeline
                      align="start"
                      side="end"
                      direction="horizontal"
                      line-color="ck-supportingaccent"
                    >
                      <v-timeline-item
                        v-for="(item, i) in WorkExperienceData"
                        :key="i"
                        icon="mdi-briefcase-outline"
                        icon-color="ck-supportingaccent"
                        fill-dot
                        dot-color="ck-accent"
                      >
                        <ExperienceCard
                          :href="item.link"
                          target="_blank"
                          :company="item.company"
                          :role="item.role"
                          :date="item.date"
                          :description="item.description"
                          :skills="item.skills"
                        />
                      </v-timeline-item>
                    </v-timeline>
                    <!-- <div class="d-flex justify-end pa-0" style="transform: translateY(9.5%)">
                      <v-badge
                        location="center"
                        class="present-badge pa-0 ma-0"
                        text-color="ck-accent"
                        color="ck-supportingaccent"
                        content="present"
                        height="35"
                        width="100"
                      >
                      </v-badge>
                    </div> -->
                  </div>
                </v-container>
              </v-container>
            </section>


            <section id="projects">
              <v-container class="pa-0" max-width="100%" style="margin-bottom: 100px">
                <p
                  class="mono font-weight-bold  text-left"
                  style="color: var(--color-secondary); font-size:36px"
                >
                  <span class="d-flex align-center ga-1">
                    <v-icon size="30">mdi-star-outline</v-icon>
                    Projects
                  </span>
                </p>
                <v-container class="" max-width="100%">
                  <v-row class="d-flex justify-center align-center pa-0">
                    <v-col cols="auto">
                      <v-container
                        class="pa-0 d-flex"
                        width="500"
                        height="500"
                        style="max-width: 500px; max-height: 500px"
                      >
                        <ProjectViewBox :project="currentProjectView || {}"></ProjectViewBox>
                      </v-container>
                    </v-col>
                    <v-col cols="auto">
                      <v-container
                        class="thin-scroll d-flex flex-wrap justify-center align-center ga-5"
                        style="
                          overflow-y: auto;
                          max-height: 500px;
                          max-width: 500px;

                          border-radius: 8px;
                          border: 1px solid var(--color-primary);
                          background-color: transparent;
                          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
                        "
                      >
                        <ProjectCard
                          v-for="(item, i) in Projects"
                          :key="i"
                          :project="item"
                          @click="setProjectView(item)"
                          style="flex-shrink: 0"
                        />
                      </v-container>
                    </v-col>
                  </v-row>
                </v-container>
              </v-container>
            </section>

          </v-main>
        </v-col>

        <v-col cols="2"> </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<style scoped>
section {
  scroll-margin-top: 0px;
}
.resume-btn {
  background: var(--color-secondary);
  transition: color 0.2s;
}

.resume-btn:hover {
  transform: scale(1.1);
}

.image-wrapper {
  position: relative;
  width: fit-content;
}

.main-img {
  display: block;
  position: relative;
  z-index: 2;
}

.shadow-overlay {
  position: absolute;
  opacity: 0.5;
  z-index: 1;
}

.present-badge :deep(.v-badge__badge) {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: 'Roboto Mono', monospace;
}

.scroll-container {
  height: calc(100vh - 85px);
  margin-top: 60px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: var(--color-supportingaccent) transparent;
}

.scroll-container::-webkit-scrollbar {
  width: 10px;
}
.scroll-container::-webkit-scrollbar-track {
  background: transparent;
}
.scroll-container::-webkit-scrollbar-thumb {
  background-color: var(--color-accent);
  border-radius: 8px;
}
a.ahref {
  all: unset;
  cursor: pointer;
  text-decoration-line: underline;
  text-decoration-style: dashed;
  transition:
    color 0.2s,
    background-color 0.2s;
}

a.ahref:hover {
  background-color: var(--color-secondary);
  color: var(--color-background);
  text-decoration-line: none;
}

.thin-scroll {
  scrollbar-width: thin;
}
.thin-scroll::-webkit-scrollbar {
  height: 4px;
}
</style>
