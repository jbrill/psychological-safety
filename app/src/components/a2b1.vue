<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="try_again"
      noLink="psychological_safety"
      :question="'Do you know what is happening?'"
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
    videoId: 'E-La91wr8xw',
  }),
}
</script>