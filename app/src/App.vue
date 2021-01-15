<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
        <v-flex>
        <h2><a style="color: white; text-decoration: none" href="/">Psychological Safety</a></h2>
        <h6>Find your way to psychological safety</h6>
        </v-flex>
      </div>

      <v-spacer></v-spacer>
      <v-btn href="https://www.youtube.com/watch?v=G52dUQLxPzg" target="_blank">Take me away</v-btn>
    </v-app-bar>

    <v-main flex align-items-center>
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

<style>
.container {
  text-align: center;
}
html, body {
  font-family: "Roboto", sans-serif !important;
  font-weight: 300;
}
#app {
  background-color: black;
  color: white;
}
.v-btn__content {
  color: white !important;
}
.v-main__wrap {
  display: flex !important;
  align-items: center !important;
}
</style>