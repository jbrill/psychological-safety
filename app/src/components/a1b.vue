<template>
  <v-container>
    <youtube :video-id="videoId"></youtube>
    <h2>Do you know where you are?</h2>
    <v-btn color="green" href="/a1b1">Yes</v-btn>
    <v-btn color="red" href="/a1b2">No</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      videoId: 'NkRkuI0ZgX0',
    }),
    computed: {
      currentRouteName() {
        console.log(this)
        return this.$route;
      }
    }
  }
</script>
