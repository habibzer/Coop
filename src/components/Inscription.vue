<template>

    <div class="insription">

        <input type="text" placeholder="Entrer le nom d'utilisateur" name="fullname" v-model="fullname" required>
        <p>
            <input type="text" placeholder="email" name="email" v-model="email" required>
        </p>

        <p><input type="password" placeholder="Entrer le mot de passe" name="password" v-model="password" required></p>

        <input type="submit"  value="valider l'inscription" @click="setMembre">
    </div>


</template>

<script>
    export default {
        name: "Inscription",

        data:function () {
            return {
                fullname:'',
                email:'',
                password:''
            }

        },

    methods:{
        setMembre()
        {
            let parametre = {
                fullname:this.fullname,
                password:this.password,
                email:this.email

            };
            axios.post("members",parametre).then((response) =>{
                this.$router.push('/Connexion')
            })
        }
    }
    }
</script>

<style scoped>

</style>