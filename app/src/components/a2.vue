<template>
  <v-container>
    <youtube :video-id="videoId"></youtube>
    <h2>Are you certain?</h2>
    <v-btn color="green" href="/a2a">Yes</v-btn>
    <v-btn color="red" href="/a2b">No</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      videoId: 'zOAVZV8tLsc',
    }),
    computed: {
      currentRouteName() {
        console.log(this)
        return this.$route;
      }
    }
  }
</script>
