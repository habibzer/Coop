<template>
    <div>

        <h1>Liste des conversations :</h1>
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
                conversations:[],
                token:""
            }
        },
        methods:{
            getChannels(){
                axios.get('channels').then(response => {
                    this.conversations=response.data;
                }).catch(error=>console.log(error))
            },
            getListMembres(){
                axios.get('members',{token:this.$store.state.tokenSession}).then(response =>{

                    this.$router.push("/Members");
                }).catch(error => alert(error.response.data.message))
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