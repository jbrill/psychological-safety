<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="a1a"
      noLink="a1b"
      :question="'Are you comfortable?'"
    />
  </v-container>
</template>

<script>
import Video from './Video';

export default {
  components: {
    Video,
  },
  data: () => ({
    videoId: 'uVSVRHsS5Wk',
  }),
}
</script>
