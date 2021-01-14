<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="try_again"
      noLink="try_again"
      :question="'Do you want to know the truth?'"
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
    videoId: 'WDpipB4yehk',
  }),
}
</script>