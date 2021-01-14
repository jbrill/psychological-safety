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
    videoId: 'q6EoRBvdVPQ',
  }),
}
</script>