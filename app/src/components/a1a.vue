<template>
  <v-container>
    <youtube :video-id="videoId"></youtube>
    <h2>Are you feeling safe?</h2>
    <v-btn color="green" href="/a1a1">Yes</v-btn>
    <v-btn color="red" href="/a1a2">No</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      videoId: '1wl5BbUg05M',
    }),
    computed: {
      currentRouteName() {
        console.log(this)
        return this.$route;
      }
    }
  }
</script>
