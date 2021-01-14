<template>
  <v-container>
    <youtube :video-id="videoId"></youtube>
    <h2>Are you stressed?</h2>
    <v-btn color="green" href="/a2b1">Yes</v-btn>
    <v-btn color="red" href="/a2b2">No</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      videoId: 'q6EoRBvdVPQ',
    }),
    computed: {
      currentRouteName() {
        console.log(this)
        return this.$route;
      }
    }
  }
</script>
