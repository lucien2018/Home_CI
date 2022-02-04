<template>
 <div class="tout">
    <div class="back">
        <div class="float-end text-center bloc">
        </div>
    </div>
    <div class="container-fluid">
     <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
        <div class="naiss">
          <h5 class="titre mt-4">Naissance</h5>
          <p class="mt-4">Home_CI est une platforme en ligne qui vous facilite la recherche immobilière. Elle est une initiative et une Conception d'un jeune etudiant ivoirien, qui inscrit son action, dans le cadre de la facilitation de la recherches immobilières. <i>"En effet, après avoir constaté l'enorme Souffrance qu'endure les populations ivoirienne, du faite des tracaseries liées à la recherche immobilière, j'ai decide de mettre à sa disposition cette platforme en vue de facilité ces operations.",</i> écrivit le Jeune KOBENA sur son <a href="#">blog</a>.</p>
        </div> 
        <br> 
          <div class="mt-4">
          <div class="servi">
          <h5 class="titre">services</h5>
           <div class="row text-center">
            <div class="col-sm-6" id="para1"><h6 class="titre mt-4">location</h6><p>Il s'agit du service qui consiste a mettre a votre disposition un ensemble d'offres de location de biens immobilier (maisons, magasins) parmi lesquels vous serez amenés a faire un choix</p></div>
            <div class="col-sm-6" id="para2"><h6 class="titre mt-4">vente</h6><p>Pour ce service-ci, Il s'agit de vous proposez un ensemble d'offres de vente de biens immobilier (maisons, terrains ,...) pour lesquels vous effecturez un choix en fonction de vos goûts et desirs</p></div>
           </div>
           </div>
           <br>
           <div class="etape">
           <h5 class="titre mt-4">etapes a suivre pour beneficier de l'integralité de nos services</h5>
             <div class="row mt-4 text-center items">
             <br>
                <div class="col-md-4 mt-3">
                  <h4 class="centrer color"><strong>.01</strong></h4>
                  <p  class="centrer">Parcourez nos offres et faite vos choix, en fonction de ce que vous recherchez </p>
                </div>
                <div class="col-md-4 mt-3">
                  <h4 class="centrer color"><strong>.02</strong></h4>
                  <p   class="centrer">Montrez un intérêt pour l'annonce de votre choix en remplissant le formulaire associé</p>
                </div>
                <div class="col-md-4 mt-3">
                  <h4 class="centrer color"><strong>.03</strong></h4>
                  <p  class="centrer">L'agent prestataire, vous contactera pour finaliser la procedure.</p>
                </div>
              </div>
              </div>
              <br>
              <br>
              <div class="agent">
              <h5 class="titre mt-4">Nos agents prestataires</h5>
              <div class="row mt-5">
                <div class="col-sm-4 text-center">
                <img src="/images/team2.jpg" id="image" class="img-fluid rounded-circle test">
                <div class="info">
                  <h5 class="mt-3">M.Kobena Kouame lucien</h5>
                  <p>Informaticien et premier Responsable d'agence</p>
                  <p><i>kouame.kobena@uvci.edu.ci</i></p>
                </div>
                </div>
                <div class="col-sm-4 text-center">
                <img src="/images/team1.jpg" id="image" class="img-fluid rounded-circle test" >
                <div class="info">
                  <h5 class="mt-3">M.Gonye bah Cheick</h5>
                  <p>Archiviste et agent prestataire</p>
                  <p><i>kouame.kobena@uvci.edu.ci</i></p>
                </div>
                </div>
                <div class="col-sm-4 text-center">
                <img src="/images/team3.jpg" id="image" class="img-fluid rounded-circle test" >
                <div class="info">
                  <h5 class="mt-3">M.Gnanguy Cephas Metuschelah</h5>
                  <p>comptable et agent prestataire</p>
                  <p><i>kouame.kobena@uvci.edu.ci</i></p>
                </div>
                </div>
              </div>
              </div>
              <br>
              <br>
              <br>
          </div>
        </div>
      </div>
     </div>
    </div>
 </div>
</template>
<script>
export default {
  
mounted(){
   this.animateOnScroll(".naiss"),
   this.animateOnScroll("#image"),
   this.animateOnScrollfromRigth("#para1")
   this.animateOnScrollfromLeft("#para2")
   this. animateOnScrollfromBottom(".servi")
  this.animateOnScrollfromLeft(".info")
  this.animateOnScrollfromLeft(".etape")
  this. animateOnScrollfromBottom(".items")
  },
  methods:{

     animateOnScroll(elem, delay, duration) {
      
      this.$gsap.fromTo(elem,  
           {
               opacity:0,
               y:-200,
               delay: delay||1,
               duration: duration||2,
           },
           {
              opacity:1,
              y:0,
              delay: delay||1,
              duration: duration||2,
              ease: 'Power1.easeInOut',
              scrollTrigger: {
                trigger: elem,
                start:"top center",
                pin: false,
                end: "bottom center",
                scrub: false
              },
           }
      )
      //this.$gsap.to(window, { duration: 5, scrollTo:880 })
    },
    animateOnScrollfromRigth(elem, delay, duration) {
      
      this.$gsap.fromTo(elem,  
           {
               opacity:0,
               x:-200,
               delay: delay||1,
               duration: duration||2,
           },
           {
              opacity:1,
              x:0,
              delay: delay||1,
              duration: duration||2,
              ease: 'Power1.easeInOut',
              scrollTrigger: {
                trigger: elem,
                start:"top center",
                pin: false,
                end: "bottom center",
                scrub: false
              },
           }
      )
      //this.$gsap.to(window, { duration: 2, scrollTo:1000 })
    },
     animateOnScrollfromLeft(elem, delay, duration) {
      
      this.$gsap.fromTo(elem,  
           {
               opacity:0,
               x:200,
               duration: duration||0.5,
           },
           {
              opacity:1,
              x:0,
              delay: delay||0.7,
              duration: duration||1.5,
              ease: 'Power1.easeInOut',
              scrollTrigger: {
                trigger: elem,
                start:"top center",
                pin: false,
                end: "bottom center",
                scrub: false
              },
           }
      )
      //this.$gsap.to(window, { duration: 2, scrollTo:1000 })
    },
       animateOnScrollfromBottom(elem, delay, duration) {
      
      this.$gsap.fromTo(elem,  
           {
               opacity:0,
               x:80,
               duration: duration||1,
           },
           {
              opacity:1,
              x:0,
              delay: delay||1,
              duration: duration||2,
              ease: 'Power1.easeInOut',
              scrollTrigger: {
                trigger: elem,
                start:"top center",
                pin: false,
                end: "bottom center",
                scrub: false
              },
           }
      )
      //this.$gsap.to(window, { duration: 2, scrollTo:1000 })
    }

  }
}
</script>

<style scoped>
.back{
  margin-top:3rem;
  background:url("/images/apropos1.jpg");
  height:45vw;
  background-size:100%;
  background-position:cover;
  background-repeat:no-repeat;
}
.titre{
text-transform:uppercase;
color:orange;
}
.test{
    height:11rem;
    width:50%;
    box-shadow: 10px 10px orange;
    margin-top:-3px;
}
.naiss .servi{
  margin-top:4rem;
  margin-bottom:4rem;
}

.tout{
  font-family:'times', sans-serif;
  font-size:1.1rem;
  overflow-x:hidden;
}
</style>
