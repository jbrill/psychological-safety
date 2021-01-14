<template>
  <v-container>
    <youtube v-if="!ended" @ended="ended = true" :video-id="videoId" :player-vars="{ autoplay: 1 }"></youtube>
    <div v-if="ended">
      <h2>{{ question }}</h2>
      <v-flex>
        <v-btn class="white--text" color="green" :to="yesLink">Yes</v-btn>
        <v-btn class="white--text" color="red" :to="noLink">No</v-btn>
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
