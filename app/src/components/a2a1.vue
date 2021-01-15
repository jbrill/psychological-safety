<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="psychological_safety"
      noLink="a1b1"
      :question="'Do you want to know the truth?'"
      speedUp
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
    videoId: 'ar2UyGn27RU',
  }),
}
</script>
