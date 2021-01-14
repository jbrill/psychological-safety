<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
        <h2>Psychological Safety</h2>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <p>
       Welcome to an interactive study on Psychological Safety.
      </p>
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'Test',

  components: {
  },

  data: () => ({
    //
  }),
  created () {
    const title = 'Psychological Safety'
    if (title) {
      document.title = title
    }
  }
};
</script>

<style scoped>
.container {
  text-align: center;
}
#app {
  background-color: black;
  color: white;
}
.v-btn__content {
  color: white !important;
}
</style>