<script setup>
    defineProps(["title","date","role","description"])
</script>

<template>
    <v-card
        class="mx-auto"
        prepend-icon="$vuetify"
        :subtitle = "role"
        width="400"
    >
        <template v-slot:title>
              <span class="font-weight-black">{{title}}</span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
            {{description}}
        </v-card-text>
    </v-card>
</template>