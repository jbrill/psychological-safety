<template>
  <v-container>
    <Video
      :videoId="videoId"
      yesLink="try_again"
      noLink="try_again"
      :question="'Do you know what is happening?'"
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
    videoId: 'MgPz_WNYxq0',
  }),
}
</script>

