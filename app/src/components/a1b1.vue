<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="try_again"
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
    videoId: '3hcV8a6cjic',
  }),
}
</script>
