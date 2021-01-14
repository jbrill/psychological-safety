<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="try_again"
      noLink="try_again"
      :question="'When I ask questions, is it really you answering?'"
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
    videoId: 'sDAJIWvTKw8',
  }),
}
</script>
