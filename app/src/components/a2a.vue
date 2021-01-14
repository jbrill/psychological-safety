<template>
  <v-container>
    <youtube :video-id="videoId"></youtube>
    <h2>Do you know who you are?</h2>
    <v-btn color="green" href="/a2a1">Yes</v-btn>
    <v-btn color="red" href="/a2a2">No</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      videoId: '5ZCgbGgA-_8',
    }),
    computed: {
      currentRouteName() {
        console.log(this)
        return this.$route;
      }
    }
  }
</script>
