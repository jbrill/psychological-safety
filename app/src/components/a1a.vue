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
    videoId: '1wl5BbUg05M',
  }),
}
</script>
