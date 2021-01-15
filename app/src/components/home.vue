<template>
  <v-container>
    <h2 style="padding-bottom: 2rem">Are you having a nice day?</h2>
    <v-flex>
        <v-btn class="white--text" color="black" to="/a1">Yes</v-btn>
        <v-btn class="white--text" color="black" to="/a2">No</v-btn>
      </v-flex>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    videoId: '3Qxe-QOp_-s',
  }),
}
</script>
