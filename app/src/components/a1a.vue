<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="a1a1"
      noLink="a1a2"
      :question="'Are you feeling safe?'"
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
    videoId: 'xv_79-p6SPM',
  }),
}
</script>
