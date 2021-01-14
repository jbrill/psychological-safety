<template>
  <v-container>
    <youtube v-if="!ended" @ended="ended = true" :video-id="videoId" :player-vars="{ autoplay: 1 }"></youtube>
    <div v-if="ended">
      <h2>{{ question }}</h2>
      <v-btn color="green" :to="yesLink">Yes</v-btn>
      <v-btn color="red" :to="noLink">No</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Video',
  props: [
    'yesLink',
    'noLink',
    'videoId',
    'question',
  ],
  data: () => ({
    ended: false,
  }),
}
</script>
