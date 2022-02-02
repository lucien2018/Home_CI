<template>
 <div class="tout">
   <div class="">
   <img src="/images/cle.jpg" class="img-fluid" >
    <div class="float-end text-center bloc">
        <h2 class="titre">Home_<span class="couleur">CI</span></h2>
        <p>La platforme numéro 1 en côte d'ivoire <br>qui vous facilite <br>la récherche immobilière.</p>
        <button type="button" class="btn btn-outline-warning btn-sm">follow us !:)</button>
    </div>
   </div>
 <div class="container mt-5">
  <div class="row mt-5" id="annonces">
    <div class="col-md-9">
      <div class="row" v-for="card in cards"  :key="card.id">
          <div class="col-lg-4" v-for="title in titles" :key="title.id">
            <br>
              <NuxtLink class="anime" to="/Details">
                <div class="card fadeSlideFrom" id="card">  
                  <img :src="'/images/'+title.img+'.jpg'" style=" height: 20rem;" class="img-fluid card-img-top">
                <div class="card-body">
                  <h5  class="card-title" id="titre">{{title.titre}}</h5>
                </div>
                </div>
              </NuxtLink>
          </div>
      </div>
          <br>
          <div class="pagi">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
          </div>
    </div>
     <div class="col-md-3 other">
     <br>
              <p>Pour acceder a plus de contenu vous devez obligatoirement vous connecter</p>
              <h6 class="mt-2 titre1">Patenaires officiaux</h6>
              <p>Nos partenaires nous accompagnent dans notre mission qui vise à vous satisfaire </p>
              <div class="row">
                <div class="col-md-12 col-sm-4 mt-3 text-center"><a href="https://www.ivoireboutik.ci/" target="_blank"><img src="/images/ivoire.jpg" class="img-fluid rounded-circle test" ></a></div>
                <div class="col-md-12 col-sm-4 mt-3 text-center"><a href="https://www.uvci.edu.ci/" target="_blank"><img src="/images/uvci.png" class="img-fluid rounded-circle test" ></a></div>
                <div class="col-md-12 col-sm-4 mt-3 text-center"><a href="https://e-jober.ci/" target="_blank"><img src="/images/jober.png" class="img-fluid rounded-circle test" ></a></div>
              </div>
      </div>
  </div>
  <br>
       <h4 class="titre1">Notre zone de couverture</h4>
       <p class="text-justify">Nos Agences ne couvrent que l'entièreté de ses villes pour l'instant. Toutefois nous visons a nous etendre sur toute l'étendu du territoire à l'horizon 2023</p>
  </div>
    <div class="marg row">
            <div class="row">
              <div class="col-sm-4  text-center"><p class="loca">Abidjan</p></div>
              <div class="col-sm-4  text-end"><p class="loca">San-pedro</p></div>
              <div class="col-sm-4 text-center"><p class="loca">Bouake</p></div>
            </div>
            <div class="row">
              <div class="col-sm-4  text-start"><p class="loca">Bondoukou</p></div>
              <div class="col-sm-4 text-center"><p class="loca">Soubre</p></div>
              <div class="col-sm-4 text-end"><p class="loca">Man</p></div>
            </div>
            <div class="row">
              <div class="col-sm-4 text-center"><p class="loca">Facobly</p></div>
              <div class="col-sm-4 text-start"><p class="loca">Abengourou</p></div>
              <div class="col-sm-4 text-center"><p class="loca">Yamoussoukro</p></div>
            </div>
    </div>
</div>
</template>
<script>
export default {

  data: function(){
   return{
    cards:[
      {
        id: 1,
      },
    ],
    titles:[
      { 
        titre:'Abobo-sogefia',
        img:'inter'
      },
      { 
        titre:'Yopougon-Maroc',
        img:'1'
      },
      { 
        titre:'Koumassi-Divo',
        img:'2'
      },
      { 
        titre:'Bardot_san-pedro',
        img:'3'
      },
      { 
        titre:'Sicogi-marché',
        img:'4'
      },
      { 
        titre:'Cité Ado Abobo',
        img:'5'
      },
    ]
   }
  }
}
</script>
<style scoped>
.back{
  background:url("/images/cle.jpg");
  height:45vw;
  background-size:100%;
  background-position:cover;
  background-repeat:no-repeat;
}
.tout{
  font-family:times, sans-serif;
  overflow-x:hidden;
}
.test{
    height:8rem;
    width:50%

  }
  .test:hover{
  box-shadow: 5px 5px orange;
  margin-top:-3px;
  }
@media screen and (max-width: 575px) {
 .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .test{
    height:5rem;
  }
}
.titre{
  font-size:3vw;
}
.marg{
  height:27rem;
  padding:3.5rem;
  background:#7DCCF3;
  color:white;
  font-size:1.1rem;
  font-family:times, sans-serif;
}
.titre1{
  text-transform:uppercase;
  color:orange;
  font-family:times, sans-serif;
}
.bloc{
  /*position:absolute;*/
  margin-top: -38vw;
  color:white;
  font-size:2.8vw;
  padding:1vw;
}
.couleur{
  color:green;
}
.color{
  color: orange;
}

.card-title{
 /* margin-top:13rem;*/
  position:absolute;
  top:13rem;
  color:white;
  margin-left:-0.9rem;
  background-color:orange;
  height:1.9rem;
  padding-left:1.5rem;
  padding-right:1.5rem;
  font-family:times,sans-serif;
  
}
.card:hover{
  box-shadow: 7px 7px black;
  margin-top:-3px;
}
.pagi{
display: flex;
justify-content:center;
}
</style>
