<template>
<div class="section">
            <div class="back">
                <div class="float-end text-center bloc">
                </div>
            </div>
		<div class="container mt-5">
		  <div class="row">
				<div class="col-md-8">
				<div class="contact">
					<h3 class="titre">Contact</h3>
					<form action="#">
						<div class="row form-group">
							<div class="col-md-6">
								<label id="label" for="fname">Nom</label>
								<input type="text" id="fname" class="form-control" placeholder="votre nom">
							</div>
							<div class="col-md-6">
								<label id="label" for="lname">Prenom</label>
								<input type="text" id="lname" class="form-control" placeholder="votre prenom">
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<label id="label" for="email">Email</label>
								<input type="text" id="email" class="form-control" placeholder="votre asresse email">
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<label id="label" for="subject">Sujet</label>
								<input type="text" id="subject" class="form-control" placeholder="votre sujet">
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<label id="label" for="message">Message</label>
								<textarea name="message" id="message" cols="10" rows="5" class="form-control" placeholder="ecrivez nous votre message"></textarea>
							</div>
						</div>
						<br>
						<div class="form-group">
							<input type="submit" value="Envoyer" class="btn btn-warning">
						</div>
					</form>	
					</div>	
				</div>
				<div class="col-md-4">
					<div class="mt-3 infocontac">
						<h6 class="titre">Nos contacts</h6>
						<div class="row">
						 <div class="col-xl-12 col-sm-4">tel: +2250748608703</div>
						 <div class="col-xl-12 col-sm-4">email:</div>
						 <div class="col-xl-12 col-sm-4">ville: Abidjan</div>
						 
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
   this.animateOnScroll("#label"),
   this.animateOnScrollfromRigth(".contact")
   this.animateOnScrollfromLeft(".infocontac")
   this. animateOnScrollfromBottom(".marg")
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
<style>

.back{
  margin-top:3rem;
  background:url("/images/contact.jpg");
  height:45vw;
  background-size:100%;
  background-position:cover;
  background-repeat:no-repeat;
}
.section{
    margin-top:45px;
	margin-bottom:30px;
	font-family: times sans-serif;
	font-size:15px;
}
.titre{
    margin-bottom:20px;
	text-transform:uppercase;
    color:orange;
}
.titre2{
	text-transform:uppercase;
	margin-bottom:20px;
}
</style>