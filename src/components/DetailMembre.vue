<template>

    <div>

        <h1>Profile de : {{membre.fullname}} !</h1>
            <h2 class="info">informations :</h2>
                <ul>
                    <li class="details">Nom : {{membre.fullname}}</li>
                    <li class="details">Adresse mail : {{membre.email}}</li>
                    <li class="details">Membre depuis : {{membre.created_at}}</li>

                </ul>
    </div>

</template>

<script>
    export default {
        name : 'DetailMembre',

        data:function () {
            return {
                membre : false
            }
        },
        mounted()  {
            this.membre = this.getMembre(this.$route.params.identifiant);
            /*alert(this.$route.params.identifiant)*/
        },
        methods:{


        }
    }
</script>
<style>

    .details{
        text-align: left;
        margin-left: 600px;
        margin-top: 10px;
    }
    .info{
        margin-top: 20px;
        margin-bottom: 60px;

    }
</style>