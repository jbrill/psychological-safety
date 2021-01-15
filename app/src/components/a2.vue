<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="a2a"
      noLink="a2b"
      :question="'Are you certain?'"
      :speedUp="true"
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
    videoId: 'AhdE0cbKEeU',
  }),
}
</script>
