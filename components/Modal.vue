<template>
<div class="bloc-modal" v-if="revele">
    <div @click="toggleModale" class="overlay"></div>
    <div class="modale card">
        <div @click="toggleModale" class="btn-modal btn btn-danger">X</div>
        <form class="row g-3">
            <div class="col-12 col-md-6">
                <label for="inputEmail4" class="form-label">Nom</label>
                <input type="text" class="form-control" id="inputEmail4">
            </div>
            <div class="col-12 col-md-6">
                <label for="inputPassword4" class="form-label">Prenom</label>
                <input type="text" class="form-control" id="inputPassword4">
            </div>
            <div class="col-12 col-md-6">
                <label for="inputAddress" class="form-label">Intitulé de l'annonce</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Abobo Sagbê">
            </div>
            <div class="col-12 col-md-6">
                <label for="inputAddress2" class="form-label">Numéro de téléphone</label>
                <input type="tel" class="form-control" id="inputAddress2" placeholder="0700000000">
            </div>
            <div class="col-md-12">
                <label for="inputCity" class="form-label">Date de rendez-vous</label>
                <input type="date" class="form-control" id="inputCity">
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-warning">Envoyer</button>
            </div>
            </form>
    </div>
</div>

</template>

<script>
export default {

    props:['revele', 'toggleModale']
}
</script>

<style>
.bloc-modal{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    justify-content:center;
    align-items:center;
}
.overlay{
    background:rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
}
.modale{
background:#ffff;
color:#333;
padding:50px;
position:fixed;
width: 75%;
height:75%;
}
.btn-modal{
    position:absolute;
    top:10px;
    right:10px;
}
</style>