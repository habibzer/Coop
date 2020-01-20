<template>
    <div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Co'op</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Conversations</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Membres</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">Membre</a>
                    </li>
                </ul>
            </div>
        </nav>

        <section>
            <ul class="list-group">
                <li class="list-group-item" v-for="conversation in conversations">{{conversation.label}}</li>
            </ul>
        </section>

    </div>
</template>

<script>
    export default {
        name: "Accueil",
        data(){
            return{
                conversations:[]
            }
        },
        methods:{
            getChannels(){
                axios.get('channels').then(response => {
                    this.conversations=response.data;
                }).catch(error=>console.log(error))
            }
        },
        mounted() {
            this.getChannels();
        }
    }
</script>

<style scoped>
    section{
        width: 25%;
    }
</style>