<template>
  <v-container>
    <h2 style="padding-bottom: 2rem">Are you having a nice day?</h2>
    <v-flex>
        <v-btn class="white--text" color="black" to="/a1">Yes</v-btn>
        <v-btn class="white--text" color="black" to="/a2">No</v-btn>
    </v-flex>
    <div class="music-player">
    <audio
      ref="audio"
      src="@/assets/home.wav"
      preload
      id="audio"
      muted
    ></audio>
    <div class="toggle-sound"></div>
  </div>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    videoId: '3Qxe-QOp_-s',
  }),
  mounted() {
    this.toggleSound();
  },
  methods: {
    toggleSound() {
      let audio = this.$refs.audio;
      audio.play();
    },
  }
}
</script>
