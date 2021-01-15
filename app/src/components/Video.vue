<template>
  <v-container>
    <youtube v-if="!ended" @ready="setPlaybackRate" @ended="ended = true" :video-id="videoId" :player-vars="{ autoplay: 1, controls: 0, showinfo: 0, frameBorder: 0, allowFullscreen: 0, modestbranding: 1, rel: 0, playbackRate: 3 }"></youtube>
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
    'speedUp'
  ],
  data: () => ({
    ended: false,
  }),
  methods: {
    setPlaybackRate(e) {
      if (this.speedUp) {
        e.target.setPlaybackRate(3);
        e.target.playVideo();
      }
    }
  },
}
</script>
<style scoped>
.white--text {
  margin: 2px;
}
.h2 {
  padding-bottom: 2rem;
}
</style>
