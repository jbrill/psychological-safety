<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="psychological_safety"
      noLink="try_again"
      :question="'Is there a meaning to life?'"
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
