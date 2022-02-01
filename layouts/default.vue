<template>
<div class="body">
        <header>
        <nav class="navbar navbar-expand-sm navbar-dark fixed-top bg-warning">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Home_CI</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-center" id="navbarCollapse">
                <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                <li class="nav-item ">
                    <NuxtLink class="nav-link" to="/">Accueil</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/apropos">A propos</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/#annonces">Annonces</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
                </li>
                </ul>
                <form class="d-flex">
                <button class="btn btn-outline-success" @click="showModal = true">Connexion</button>
                </form>
            </div>
            </div>
        </nav>
        </header>
        <!--<Connexion v-show="showModal" />-->
        <Nuxt/>
         <footer class="foot container-fluid">
            <p class="float-end"><a href="#">Back to top</a></p>
            <p>&copy;2022 Home_CI, &middot; <a href="#"></a> &middot; <a href="#">Terms</a></p>
        </footer>
  </div>
</template>
<style>
.foot{
 padding:3rem;
 background-color:#191B1B;
 color: white;
}
.body{
    padding:0;
}
</style>
<script>
import Connexion from '~/components/Connexion.vue'

export default {
  components: { Connexion },
  data() {
    return {
      showModal: false,
    }
  },
}
</script>