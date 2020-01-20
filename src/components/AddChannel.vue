<template>
    <div>
        <form @submit.prevent="addChannel">
            <div>
                <label >Titre : </label><input type="text" placeholder="Titre" v-model="titre" required/>
            </div>
            <div>
                <label >Topic : </label><input type="text" placeholder="Topic" v-model="topic" required/>
            </div>
            <div>
                <input type="submit" value="Ajouter une conversation">
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                titre:'',
                topic:''
            }
        },
        methods:{
            addChannel(){
                axios.post('channels',{label:this.titre,topic:this.topic,token:this.$store.state.tokenSession}).then(response => {
                    console.log('Conversation ajoutée : '+response.data.label);
                    this.$router.push("/Accueil");
                }).catch(error => alert(error.response.data.message))
            }
        }
    }
</script>