<template>
  <div id="app">

    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
  import Navigation from "@/components/Navigation.vue";

  export default {
    components : {
      Navigation
    },
    mounted() {
    axios.get('members').then(response => {
      this.$store.commit('setMembres',response.data);
    });

      if(!this.membreConnecter){

        this.$router.push('Connexion')
      }
    },

    computed: {

      membreConnecter()
      {
        return this.$store.state.membre;
      }
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
