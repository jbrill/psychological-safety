<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="try_again"
      noLink="a1b"
      :question="'Do you often find yourself wanting more?'"
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
    videoId: 'f5eiIEjpxwY',
  }),
}
</script>