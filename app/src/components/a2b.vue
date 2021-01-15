<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="a2b1"
      noLink="a2b2"
      :question="'Are you stressed?'"
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
    videoId: 'ZZ-kI4Qzj9U',
  }),
}
</script>