<template>
    <div class="tout">
         <div class="back"></div>
        <div class="mt-5 container">
        <h5 class="col-md-4 title">Abobo-sogefia</h5>
         <div class="row">
          <div class="col-md-4">
          <img :src="'/images/'+link+'.jpg'" class="img-fluid">
          <h5 class="mt-4 titre">Visite en images</h5>
          <div class="row mt-3S visite">
            <div class="col-sm-4 mt-2"><a  class="link" @click="change1()"><img src="/images/inter.jpg" class="img-fluid rounded test" style="height:5rem; width:100%;"></a></div>
            <div class="col-sm-4 mt-2"><a  class="link" @click="change2()"><img src="/images/1.jpg" class="img-fluid rounded test" style="height:5rem; width:100%;"></a></div>
            <div class="col-sm-4 mt-2"><a  class="link" @click="change3()"><img src="/images/2.jpg" class="img-fluid rounded test" style="height:5rem; width:100%;"></a></div>
            <div class="col-sm-4 mt-2"><a  class="link" @click="change4()"><img src="/images/3.jpg" class="img-fluid rounded test" style="height:5rem; width:100%;"></a></div>
            <div class="col-sm-4 mt-2"><a  class="link" @click="change5()"><img src="/images/4.jpg" class="img-fluid rounded test" style="height:5rem; width:100%;"></a></div>
            <div class="col-sm-4 mt-2"><a  class="link" @click="change6()"><img src="/images/5.jpg" class="img-fluid rounded test" style="height:5rem; width:100%;"></a></div>
          </div>
          </div>
          <div class="col-md-8">
          <br>
          <div class="detaillé">
            <h5 class="titre">Informations Detaillées</h5>
            <h6>Status : <span> En Location</span></h6>
            <h6>Caution : <span> 500.000 Fr</span></h6>
            <h6>Loyer : <span> 100.000 Fr</span></h6>
            <h6>Prix de vente : <span> Neant</span></h6>
            <h6>Descriptions : <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vejequaja quovevemy, velan he ja neb que doemymibyd seh cedal ly. Vyf dale lil fiboma lelaba, fatoes fyseb bef, din hade roqui, dif cebise jome. Leb semar, dilulenoefi, ba moeda lepoe jequyj sec dil, mo se. Fefinila, der ma by pili daboe, roquotedy bole hu tam ba nodej jequema byl valej.<br />
                <br />
                Jabuvil lyt lydoebem baba vetabi me dyquaquily memal, jisapeb, dejoe lem rif. Va, byj vadybyte ba jadilubel ve mume fidela daledemapa be depe nuly vib vadedel. Fefamumu, se soefiqueda jelam leleh, bidi ri fe danelame, ru. Fym ca dyloet mot mola, ti vylev la lyjeded, dimoda bo camel, labyta fem. Myma noteb balevamo cedisety dem deli madequ pivymyjiny teb sehi las mil.<br />
                <br />
                Fisinar, ba la ceveni fivy dequ cap, mimalale mahih byme, mal. Nusel miba nala cydi, ce dylefi mal bel, bi quala risa me. Lod, fyl rydoel cam toequ cire, pice meditip copoenab palad. Reca bes, tive quyhe sel mabim dyto taril col li bibipotafo lomutih sor bam bar. La, quil doemub coela buqui roenef don quosivaf syd ba tym dyt.<br />
                <br />
                Quadaqu peb neme deloedu leda bemic, bajel tanuletoed loefe dilipi. Maj lelyl noec mira mim da, debem joded didemecoe, diloet. Pelu camaquoeb lyd miban buca lufol mefif sic be nymalin. Peselif ma bumamef la ferymi da, loe li dupeh syjac, libop mad jidoe tatemibor vot. Paboe vibe fot divym jo, debeb dalyd mi duf, ryhubo.</span></h6>
                <h5 class="col-md-5 titre">Agent prestataire </h5>    
                <div class="row mt-2">
                    <div class="col-sm-2"><img src="/images/Agent.png" class="rond img-thumbnail"></div>
                    <div class="col-sm-10">
                    <h5>M.Kobena Kouame lucien</h5>
                    <p>Responsable du traitement de cette annonce pour toute éventuel interêt</p>
                    <p><i>kouame.kobena@uvci.edu.ci</i></p>
                    </div>
                </div>
                <p>Si vous portez un interet quelconque a cette annonce, vueillez s'il vous plait cliquer sur le button ci-dessous</p>
                <div class="bas">
                <button @click="toggleModale" type="button" class="btn btn-outline-warning btn-md">INTERESSE</button>
                </div>
                <br>
                </div>
          </div>
         </div>
        </div>
        <Modal :revele="revele" :toggleModale="toggleModale"/>
    </div>
</template>
<script>
export default {

 data: function(){
   return{
       revele:false,
       link:'inter',
   }
 },
  mounted(){
   this.animateOnScroll(".title"),
   this.animateOnScroll(".titre"),
   this.animateOnScrollfromRigth(".img-fluid")
   this.animateOnScrollfromLeft(".detaillé")
   this. animateOnScrollfromBottom(".visite")
  },

 methods:{

 toggleModale:function(){
  this.revele= !this.revele
 },
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
    },

 async change1(){
     this.link='inter'
 },
 async change2(){
     this.link='1'
 },
 async change3(){
     this.link='2'
 },
 async change4(){
     this.link='3'
 },
 async change5(){
     this.link='4'
 },
 async change6(){
     this.link='5'
 },

 }

}
</script>
<style scoped>
.back{
  background:url("/images/more.jpg");
  height:45vw;
  background-size:100%;
  background-position:cover;
  background-repeat:no-repeat;
}

@media screen and (max-width: 575px) {
 .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-sm-2{
    flex: 0 0 auto;
    width: 100%;
    text-align:center;
  }
}
.link{
    cursor: pointer;
}
.test:hover{
  box-shadow: 5px 5px orange;
  margin-top:-3px;
}
.bas{
    display:flex;
    justify-content:center;
}
span{
  font: 1rem 'times', sans-serif;
  font-style: oblique 23deg;
  font-weight: normal;
}
.rond{
    border-radius:50%;
}
.tout{
    font-family:'times', sans-serif;
}
.titre{
text-transform:uppercase;
color:orange;
}
.title{
  color:white;
  background-color:orange;
  font-size:1.8rem;
  padding:1.5rem;
  font-family:times,sans-serif;
}
</style>