<template>
    <section>
        <div>
           <h1>Conversation : {{conversation.label}} </h1>
            <h2>Topic : {{conversation.topic}} </h2>
            <input type="text" placeholder="Entrez votre message ici et appuyez sur entrée" class="barre">
        </div>

    </section>
</template>

<script>
    import Message from "./Message";
    export default {
        name : 'Conversation',
    components:{
            Message
    },
        data:function () {
            return {

                    conversation : false
            }
        },
        mounted()  {

            axios.get('channels/'+this.$route.params.idConversation).then(response => {
                this.conversation=response.data;
            }).catch(error=>console.log(error))
        },
        methods:{


        }
    }
</script>
<style>

.barre{
    width: 1500px;
    height: 70px;
    margin-top: 500px;
}
</style>