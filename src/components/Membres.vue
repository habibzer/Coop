<template>

    <div>

        <div v-for="membre in $store.state.membres">
            <h2>{{membre.fullname}}</h2>
            <p>{{membre.email}}</p>
        </div>
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

</style>