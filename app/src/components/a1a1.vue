<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="psychological_safety"
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
    videoId: 'xiYrdL-In0c',
  }),
}
</script>
