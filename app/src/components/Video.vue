<template>
  <v-container>
    <youtube v-if="!ended" @ready="setPlaybackRate" @ended="toggleSound" :video-id="videoId" :player-vars="{ autoplay: 1, controls: 0, showinfo: 0, frameBorder: 0, allowFullscreen: 0, modestbranding: 1, rel: 0, playbackRate: 3 }"></youtube>
    <div class="video-contain" v-if="ended">
      <h2>{{ question }}</h2>
      <v-flex>
        <v-btn class="white--text" color="black" :to="yesLink">Yes</v-btn>
        <v-btn class="white--text" color="black" :to="noLink">No</v-btn>
      </v-flex>
    </div>
    <audio
      ref="audio"
      :src="getTrackName"
      preload
      id="audio"
      muted
    ></audio>
    <div class="toggle-sound"></div>
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
    'speedUp',
    'audioLink'
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
      e.target.playVideo();
    },    
    toggleSound() {
      this.ended = true;
      let audio = this.$refs.audio;
      let playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(function() {
          // Automatic playback started!
        }).catch(function(error) {
          // Automatic playback failed.
          console.error(error)
          // Show a UI element to let the user manually start playback.
        });
      }
    },
    getTrackName() {
      require('@/assets/' + this.audioLink + '.wav');
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
