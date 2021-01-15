<template>
  <v-container>
    <youtube v-if="!ended" @ended="ended = true" :video-id="videoId" :player-vars="{ autoplay: 1, controls: 0, showinfo: 0, frameBorder: 0, allowFullscreen: 0, modestbranding: 1, rel: 0 }"></youtube>
    <div class="video-contain" v-if="ended">
      <h2>{{ question }}</h2>
      <v-flex>
        <v-btn class="white--text" color="black" :to="yesLink">Yes</v-btn>
        <v-btn class="white--text" color="black" :to="noLink">No</v-btn>
      </v-flex>
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
<style scoped>
.white--text {
  margin: 2px;
}
</style>
