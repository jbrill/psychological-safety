<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="a2a"
      noLink="a2b"
      :question="'Are you certain?'"
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
    videoId: 'zOAVZV8tLsc',
  }),
}
</script>
