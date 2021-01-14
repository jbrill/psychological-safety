<template>
  <v-container>
    <youtube :video-id="videoId" :player-vars="{ autoplay: 1 }"></youtube>
    <h2>Are you comfortable?</h2>
    <v-btn color="green" to="/a1a">Yes</v-btn>
    <v-btn to="/a1b" color="red">No</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      videoId: 'HqGsT6VM8Vg',
    }),
    computed: {
      currentRouteName() {
        console.log(this)
        return this.$route;
      }
    }
  }
</script>
