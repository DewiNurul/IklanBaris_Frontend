<template>
    <!--================Login Box Area =================-->
	<section class="login_box_area">
		<div class="container" align="center">
				<div class="col-md-5">
					<div class="login_form_inner">
						<h3>LOGIN</h3>
						<form class="row login_form" action="index.html" method="post" id="contactForm" novalidate="novalidate">
							<div class="col-md-12 form-group">
								<input type="email" class="form-control" id="email" name="email" placeholder="Email">
							</div>
							<div class="col-md-12 form-group">
								<input type="password" class="form-control" id="password" name="password" placeholder="Password">
							</div>
							<div class="col-md-12 form-group">
								<div class="creat_account">
									<input type="checkbox" id="f-option2" name="selector">
									<label for="f-option2">Keep me logged in</label>
								</div>
							</div>
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="btn submit_btn">LOGIN</button>
							</div>
						</form>
					</div>
				</div>
		
		</div>
	</section>
	<!--================End Login Box Area =================-->
</template>