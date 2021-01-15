<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="a2a1"
      noLink="a2a2"
      :question="'Do you know who you are?'"
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
    videoId: '92Qhrb4XoWc',
  }),
}
</script>
