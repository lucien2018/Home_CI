<template>
<div class="section">
            <div class="back">
                <div class="float-end text-center bloc">
                </div>
            </div>
		<div class="container mt-5">
		<h3 class="titre">Contact</h3>
			<div class="row">
				<div class="col-md-8">
					<form action="#">
						<div class="row form-group">
							<div class="col-md-6">
								<label for="fname">Nom</label>
								<input type="text" id="fname" class="form-control" placeholder="votre nom">
							</div>
							<div class="col-md-6">
								<label for="lname">Prenom</label>
								<input type="text" id="lname" class="form-control" placeholder="votre prenom">
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<label for="email">Email</label>
								<input type="text" id="email" class="form-control" placeholder="votre asresse email">
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<label for="subject">Sujet</label>
								<input type="text" id="subject" class="form-control" placeholder="votre sujet">
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<label for="message">Message</label>
								<textarea name="message" id="message" cols="10" rows="5" class="form-control" placeholder="ecrivez nous votre message"></textarea>
							</div>
						</div>
						<br>
						<div class="form-group">
							<input type="submit" value="Envoyer" class="btn btn-warning">
						</div>

					</form>		
				</div>
				<div class="col-md-4">
					<div class="mt-3">
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