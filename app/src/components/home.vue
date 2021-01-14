<template>
  <v-container>
    <h2>Are you having a nice day?</h2>
    <v-btn color="green" to="/a1">Yes</v-btn>
    <v-btn to="/a2" color="red">No</v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      videoId: '3Qxe-QOp_-s',
    }),
    computed: {
      currentRouteName() {
        console.log(this)
        return this.$route;
      }
    }
  }
</script>
