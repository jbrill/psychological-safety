<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="psychological_safety"
      noLink="try_again"
      :question="'Do you think you are a good person?'"
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
    videoId: '2O2fleABnjY',
  }),
}
</script>
