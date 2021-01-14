<template>
  <v-container>
    <youtube :video-id="videoId" :player-vars="{ autoplay: 1 }"></youtube>
    <h2>Is there a meaning  to life?</h2>
    <v-btn color="green" href="/a2a1">Yes</v-btn>
    <v-btn color="red" href="/a2a2">No</v-btn>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      videoId: 'sDAJIWvTKw8',
    }),
    computed: {
      currentRouteName() {
        console.log(this)
        return this.$route;
      }
    }
  }
</script>
