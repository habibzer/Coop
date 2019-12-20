<template>
    <div class="Connexion">
        <h2>Co'op - Identification</h2>

        <input type="text" placeholder="Entrer le nom d'utilisateur" name="username" required>

        <p><input type="password" placeholder="Entrer le mot de passe" name="password" required></p>

        <input type="submit"  value='LOGIN' >
        <button>
            <router-link class="button_is_text"  to='/Inscription'>Créer un compte</router-link>
        </button>

    </div>
</template>

<script>
    export default {
        name: 'Connexion',
        mounted() {

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
