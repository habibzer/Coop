<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Co'op</a>

            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Conversations</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Members" class="nav-link">Membres</router-link>
                </li>
                <li class="nav-item">
                     <router-link to="/AddChannel" class="nav-link">Créer une conversation</router-link>
                </li>
            </ul>
    </nav>

</template>
<script>
    export default {
        name : 'Navigation'
    }
</script>
<style>
.router-link-exact-active {
    font-weight:bolder;
    background-color: lightgrey;
}
</style>