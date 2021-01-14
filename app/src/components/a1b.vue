<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="a1b1"
      noLink="a1b2"
      :question="'Do you know where you are?'"
    />
  </v-container>
</template>

<script>
import Video from './Video.vue';

export default {
  components: {
    Video,
  },
  data: () => ({
    videoId: 'NkRkuI0ZgX0',
  }),
}
</script>
