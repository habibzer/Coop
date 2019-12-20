<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>

  export default {
    mounted() {
      if(!this.membreConnecter){

        this.$router.push('Connexion')
      }
    },

    computed: {

      membreConnecter()
      {
        return this.$store.state.membre ? true : false;

      }
  },
    methode:{


  }



  }

</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
