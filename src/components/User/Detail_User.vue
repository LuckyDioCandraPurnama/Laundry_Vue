<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <!-- Page Heading -->
          <h1 class="h3 mb-2 text-gray-800">DETAIL USER</h1>
          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Data User</h6>
            </div>
            <div class="card-body">
              <div class="row align-items-center">
                  <div class="col-md-4 text-center">
                          <img class="col-lg-7 bg-login-image" src="@/assets/img/profil.jpg" />
                          <!-- <i class="far fa-user fa-7x text-gray-300"></i> -->
                  </div>
                  <!-- <div class="col py-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase">Nama</div>
                      <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{member.nama}}</div>
                      <div class="text-xs font-weight-bold text-primary text-uppercase">Alamat</div>
                      <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{member.alamat}}</div>
                      <div class="text-xs font-weight-bold text-primary text-uppercase">Jenis Kelamin</div>
                      <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{member.jenis_kelamin}}</div>
                      <div class="text-xs font-weight-bold text-primary text-uppercase">No Telp</div>
                      <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{member.tlp}}</div>
                  </div> -->
                  
                  <div class="col py-2" v-for="m in user" :key="m.id">
                      <div class="text-xs font-weight-bold text-primary text-uppercase">Nama</div>
                      <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{m.nama}}</div>
                      <div class="text-xs font-weight-bold text-primary text-uppercase">Username</div>
                      <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{m.username}}</div>
                      <!-- <div class="text-xs font-weight-bold text-primary text-uppercase">Password</div>
                      <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{m.password}}</div> -->
                      <div class="text-xs font-weight-bold text-primary text-uppercase">Role</div>
                      <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{m.role}}</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer-component></footer-component>
    </div>
  </div>

  <!-- Begin Page Content -->
</template>
<script>
export default {
  data() {
    return {
      user: {},
      // hash:{}
    };
  },
  created(){
    this.axios
        .get(`http://localhost/api-laundry/public/api/user/${this.$route.params.id}`,
        {headers : {Authorization : 'Bearer' +this.$store.state.token}})
        .then((res) => {
          this.user = res.data;
        })
  },
  // methods:{
  //   hash() {		
	//  this.hash = "Hash = "+location.hash;
  //   }
  //  }
  
};
</script>
