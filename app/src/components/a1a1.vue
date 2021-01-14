<template>
  <v-container>
    <youtube :video-id="videoId" :player-vars="{ autoplay: 1 }"></youtube>
    <h2>When I ask questions, is it really you answering?</h2>
    <v-btn color="green" href="/try_again">Yes</v-btn>
    <v-btn color="red" href="/try_again">No</v-btn>
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
