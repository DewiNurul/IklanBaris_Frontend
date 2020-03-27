<template>
    <header class="header_area">
		<div class="top_menu row m0">
			<div class="container-fluid">
				
				<div class="float-right">
					<ul class="right_side">
						<li>
							<router-link to="/register">
								Register
							</router-link>
						</li>
						<li>
							<router-link to="/login">
								Login
							</router-link>
						</li>
							<li>
							<router-link to="/">
								Logout
							</router-link>
						</li>
					
					</ul>
				</div>
			</div>
		</div>
		<div class="main_menu">
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container-fluid">
					<!-- Brand and toggle get grouped for better mobile display -->
					<a class="navbar-brand logo_h" href="#">
						<img src="img/logo.png" alt="">
					</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					 aria-expanded="false" aria-label="Toggle navigation">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
						<div class="row w-100">
							<div class="col-lg-7 pr-0">
								<ul class="nav navbar-nav center_nav pull-right">
									<li class="nav-item">
										 <router-link to="/" class="nav-link">
												Home
									     </router-link>
									</li>

									<li class="nav-item submenu dropdown">
										<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
									    <ul class="dropdown-menu">
									     <li class="nav-item">
											 <router-link to="/kategori" class="nav-link">
												Kategori Produk
											 </router-link>
                                        </li>
									   </ul>
									</li>

									<li class="nav-item">
										 <router-link to="/iklan_saya" class="nav-link">
												Iklan Saya
										 </router-link>
										<!-- <a class="nav-link" href="/iklan_saya">Iklan Saya</a> -->
									</li>

								</ul>
							</div>

							<div class="col-lg-5">
								<ul class="nav navbar-nav navbar-right right_nav pull-right">
									<hr>

									<li class="nav-item">
										<router-link to="#" class="icons">
											<i class="fa fa-user" aria-hidden="true"></i>
										</router-link>
									</li>

									<hr>

									<li class="nav-item">
										<router-link to="#" class="icons">
											<i class="fa fa-heart-o" aria-hidden="true"></i>
										</router-link>
									</li>

									<hr>

									<li class="nav-item">
									    <router-link to="/jual" class="icons">
											<i class="lnr lnr lnr-cart"></i>
										 </router-link>
									</li>

									<hr>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</header>
	<!--================Header Menu Area =================-->

    
</template>

<script>
export default {
    name: 'navbar',
    computed : {
        isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
//     methods:{
//       logout:function(){
//           let conf = { headers : {"Authorization" : "Bearer " + localStorage.getItem("Authorization")} };
//           let form = new FormData();
//           this.axios.post('/logout', form, conf).then(response => {
//             if (response.data.logged === false || response.data.status === 0) {
//                 this.$store.commit('logout')
//                 localStorage.removeItem("Authorization")
//                 this.$router.push({name: 'login'})
//             }
//           }).catch(error => {

//         });
//       },
//   },
}
</script>