<template>


    <div>
        <h1>Liste des membres :</h1>
        <ul class="list-group" v-for="membre in $store.state.membres">
            <li class="list-group-item">
                <router-link :to="{
                    name : 'DetailMembre',
                    params : {
                        identifiant : membre.id
                    }
                }" class="nav-link">Pseudo : {{membre.fullname}}</router-link>
                <p>mail : {{membre.email}}</p>
                <button>supprimer</button>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "Membres",

        data:function () {
            return {

            }

        },

        methods:{
        }
    }
</script>

<style scoped>
li{
    text-align: left;
    line-height: normal;
}
</style>