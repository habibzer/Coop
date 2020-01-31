<template>

    <div>

        <h1>Detail {{membre}} !</h1>

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
            alert(this.$route.params.identifiant)
        },
        methods:{

        }
    }
</script>
<style>

</style>