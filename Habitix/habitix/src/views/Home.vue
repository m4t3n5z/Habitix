<template>
  <div class="home">
      <nav> 
        <v-btn 
        elevation="24"
        to="Home" 
        :loading="loading"
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn 
        elevation="24"
        to="habitix" 
        :loading="loading"
        >
          <v-icon>mdi-widgets</v-icon>
        </v-btn>
      </nav>


  <v-container fluid fill-height>
      habitix
    </v-container>
  </div>
</template>

<script>


export default {
  name: "Home",
  components: {

  },
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
    };
  }
};
</script>



