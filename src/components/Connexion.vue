<template>
    <div class="Connexion">
        <h2>Co'op - Identification</h2>

        <input type="text" placeholder="Entrer le nom d'utilisateur" name="username" required>

        <p><input type="password" placeholder="Entrer le mot de passe" name="password" required></p>

        <input type="submit"  value='LOGIN' >
        <input type="submit"  value='INSCRIPTION' >

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
