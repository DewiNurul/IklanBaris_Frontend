<template>
    <!--================Login Box Area =================-->
	<section class="login_box_area">
		<div class="container" align="center">
				<div class="col-md-5">
					<div class="login_form_inner">
						<h3>LOGIN</h3>
						<form v-on:submit.prevent="Login" class="row login_form" method="post" id="contactForm" novalidate="novalidate">
							<div class="col-md-12 form-group">
								<input v-model="email" type="email" class="form-control" id="email" name="email" placeholder="Email">
							</div>
							<div class="col-md-12 form-group">
								<input v-model="password" type="password" class="form-control" id="password" name="password" placeholder="Password">
							</div>
							<br>
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

<script>
export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
        Login: function(){
            let email = this.email //let itu variabel baru
            let password = this.password
            this.$store.dispatch('login', { email, password })
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
        }
    }
}
</script>