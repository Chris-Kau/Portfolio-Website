<script setup lang="ts">
  import Navbar from "./assets/Navbar.vue";
  import ExperienceCard from "./assets/ExperienceCard.vue";
  import WorkExperienceData from "@/assets/data/WorkExperiences.json";
</script>
<template>
  <v-app>
    <Navbar/>
    <div class="scroll-container pa-0">
      <v-main>
        <section id="about">
          <v-container class="d-flex pb-16" max-width="1100">
            <div class="sans flex-1">
              <div>
                <p class="text-2xl ml-1 text-(--color-text)">Software Engineer</p>
                <p class="text-8xl font-semibold text-(--color-text)">Hello I'm</p>
                <p class="text-8xl font-semibold text-(--color-secondary)">Chris Kau</p>
                <p class="pt-4 text-xl text-(--color-secondary) max-w-130">
                  I'm a student at California State University of Long Beach and
                  I enjoy building projects that are genuinely useful to people. This includes quality-of-life game mods
                  that improve the player experience, and practical web applications that are impactful to other people!
                </p>
              </div>
              <v-container class="social-icons d-flex flex-row ga-md-7 ps-1">
                <v-btn height="50" class="resume-btn text-white" variant="tonal">
                  View Resume
                  <v-icon size="20" class="ms-2 text-white">
                    mdi-file-document
                  </v-icon>
                </v-btn>
                <v-btn size="50" class="social-icons bg-transparent" variant="text" href="https://github.com/Chris-Kau" target="_blank" aria-label="Github" >
                  <v-icon size="50">mdi-github</v-icon>
                </v-btn>
                <v-btn size="50" class="social-icons bg-transparent" variant="text" href="https://www.linkedin.com/in/chris-kau/" target="_blank" aria-label="LinkedIn">
                  <v-icon size="50">mdi-linkedin</v-icon>
                </v-btn>
                <v-btn size="50" class="social-icons bg-transparent" variant="text" href="mailto:chriskau04@gmail.com?subject=Portfolio%20Contact" aria-label="Email me at chriskau04@gmail.com">
                  <v-icon size="50">mdi-email</v-icon>
                </v-btn>
              </v-container>

            </div>
        <div class="image-wrapper">
          <img
            src="./assets/images/oshawott shadow.png"
            class="shadow-overlay mt-7 ml-6"
            alt=""
            aria-hidden="true"
            style
          />
          <img
            src="./assets/images/about oshawott.png"
            class="main-img"
            alt="Oshawott illustration"
          />
        </div>
          </v-container>
        </section>
        <v-divider/>

        <section id="experience">
          <v-container class="py-16">
            <p class="mono text-8xl font-semibold text-(--color-text) mb-10 text-center">Work Experience</p>
            <v-container class="d-flex flex-row align-center justify-center">
              <div class="image-wrapper">
                <img
                  src="./assets/images/oshawott shadow.png"
                  class="shadow-overlay"
                  style="right:80px; top:25px"
                  alt="Oshawott Proud Illustration"
                  
                />
                <img src="./assets/images/work oshawott.png" style="width:500px" class="main-img" alt="Oshawott Proud Illustration">

              </div>
              <div class="flex-1">
                <div class="flex justify-center align-center mb-4">
                  <v-badge location="center" class="present-badge" text-color="ck-accent" color="ck-supportingaccent" content="present" height="35" width="100">
                  </v-badge>
                </div>
                <v-timeline align="start" line-color="ck-supportingaccent" >
                    <v-timeline-item
                      v-for="(item, i) in WorkExperienceData"
                      :key="i"
                      icon="mdi-briefcase-outline"
                      icon-color="ck-supportingaccent"
                      fill-dot
                      dot-color="ck-accent"
                    >
                      <ExperienceCard :href="item.link"
                      target="_blank"
                      :company="item.company"
                      :role="item.role"
                      :date="item.date"
                      :description="item.description"
                      :skills="item.skills"
                      />
                    </v-timeline-item>
                </v-timeline>
              </div>


            </v-container>
          
          </v-container>
        </section>

        <v-divider/>

        <section id="projects">
          <v-container class="py-16">
            <p class="mono text-8xl font-semibold text-(--color-text) mb-10 text-center">Projects</p>
            <img src="./assets/images/about oshawott.png">
          </v-container>
        </section>

        <v-divider/>

        <section id="skills">
          <v-container class="py-16">
            <img src="./assets/images/about oshawott.png">
          </v-container>
        </section>

        <v-divider/>

        <section id="contact">
          <v-container class="py-16">
            <img src="./assets/images/about oshawott.png">
          </v-container>
        </section>
      </v-main>
    </div>
    
   

  </v-app>
</template>

<style scoped>
section {
  scroll-margin-top: 0px;
}
.social-icons .v-icon {
  color: var(--color-secondary);
  transition: color 0.2s easy, transform 0.2s ease;
}

.social-icons .v-btn:hover .v-icon{
  color: var(--color-primary);
  transform: scale(1.1)
}
.resume-btn{
  background: var(--color-secondary);
  transition: color 0.2s;
}

.resume-btn:hover{
  color: var(--color-secondary);
  background: var(--color-primary);
  transform: scale(1.1)
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
  margin-top: 70px;
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

</style>
