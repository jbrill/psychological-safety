<template>
  <v-container>
    <youtube :video-id="videoId" :player-vars="{ autoplay: 1 }"></youtube>
    <h2>Do you want to know the truth?</h2>
    <v-btn color="green" href="/try_again">Yes</v-btn>
    <v-btn color="red" href="/try_again">No</v-btn>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      videoId: 'WDpipB4yehk',
    }),
    computed: {
      currentRouteName() {
        console.log(this)
        return this.$route;
      }
    }
  }
</script>
