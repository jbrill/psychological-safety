<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="psychological_safety"
      noLink="try_again"
      :question="'Do you think you\'re in control?'"
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
    videoId: 'jm0-3kcAgkM',
  }),
}
</script>
