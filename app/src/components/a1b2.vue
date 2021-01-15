<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="psychological_safety"
      noLink="a2a"
      :question="'Is there a meaning to life?'"
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
    videoId: '6Bx581EWWw8',
  }),
}
</script>
