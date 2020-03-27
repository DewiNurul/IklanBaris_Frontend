<template>
    <!--================Register Box Area =================-->
	<section class="login_box_area">
		<br>
		<br>
		<div class="container" align="center">
				<div class="col-md-5">
					<div class="login_form_inner">
						<h3>REGISTRASI</h3>
						<form v-on:submit.prevent="Register" class="row login_form" method="post" id="contactForm" novalidate="novalidate">
							<div class="col-md-12 form-group">
								<input v-model="nama" type="text" class="form-control" id="nama" name="nama" placeholder="Username">
							</div>
							<div class="col-md-12 form-group">
								<input v-model="email" type="email" class="form-control" id="email" name="email" placeholder="Email">
							</div>
							<div class="col-md-12 form-group">
								<input v-model="password" type="password" class="form-control" id="password" name="password" placeholder="Password">
							</div>
							<!-- <div class="col-md-12 form-group">
								<div class="creat_account">
									<input type="checkbox" id="f-option2" name="selector">
									<label for="f-option2">Keep me logged in</label>
								</div>
							</div> -->
							<br>
							<br>
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="btn submit_btn">REGISTER</button>
							</div>
						</form>
					</div>
				</div>
		
		</div>
	</section>
	<!--================End Register Box Area =================-->
</template>

<script>
export default {
    data() {
      return {
		nama:'',
        email: '',
        password: ''
      }
    },
    methods: {
        Register: function(){
			let nama = this.nama
            let email = this.email //let itu variabel baru
            let password = this.password
            this.$store.dispatch('register', {nama, email, password })
            .then(() => this.$router.push('/login'))
            .catch(err => console.log(err))
        }
    }
}
</script>