<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <div
            class="d-sm-flex align-items-center justify-content-between mb-4"
          >
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <router-link to="/report" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              <i class="fas fa-download fa-sm text-white-50"></i>
              <span>Generate Report</span>
            </router-link>
            <!-- <a
              href="/report"
              class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i class="fas fa-download fa-sm text-white-50"></i> Generate
              Report</a> -->
          </div>
          <div class="card shadow mb-4">
            <div class="card-header c">
              <h5 class="m-0 font-weight-bold text-primary">
                selamat datang {{ name }}
              </h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div
                            class="
                              text-xs
                              font-weight-bold
                              text-primary text-uppercase
                              mb-1
                            "
                          >
                            Member
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            {{ data.member }}
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-users fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Jumlah laundry baru -->
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-warning shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div
                            class="
                              text-xs
                              font-weight-bold
                              text-warning text-uppercase
                              mb-1
                            "
                          >
                            Laundry Baru
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            {{ data.baru }}
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-tshirt fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Jumlah laundry proses -->
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div
                            class="
                              text-xs
                              font-weight-bold
                              text-success text-uppercase
                              mb-1
                            "
                          >
                            Proses Laundry
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            {{ data.proses }}
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-spinner fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Pendapatan -->
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div
                            class="
                              text-xs
                              font-weight-bold
                              text-info text-uppercase
                              mb-1
                            "
                          >
                            Pendapatan
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            Rp {{ data.pendapatan }}
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-money-bill fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card shadow mb-4">
            <div
              class="
                card-header
                d-flex
                flex-row
                align-items-center
                justify-content-between
              "
            >
              <h6 class="m-0 font-weight-bold text-primary">About</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6">
                  <h2 class="h3 text-gray-900">APP LAUNDRY</h2>
                  <p class="mb-0">
                    Aplikasi ini buat laundry <br />Trus bisa cari uang
                    <br />Aku jadi kaya raya <br />Tamat
                  </p>
                </div>
                <div class="col">
                  <h2 class="h3 text-gray-900">Contact</h2>
                  <i class="far fa-envelope"> luckyawan7b@gmail.com</i><br />
                  <!-- <i class="fab fa-whatsapp"> +6285233999857</i><br> -->
                  <i class="fab fa-facebook-square"> Lucky Purnama</i><br />
                  <i class="fab fa-instagram"> luckydio_27</i><br />
                  <i class="fab fa-github"> LuckyDioCandraPurnama</i><br />
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer-component></footer-component>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      data: {},
    };
  },
  created() {
    var data = JSON.parse(this.$store.state.datauser);
    this.name = data.name;

    this.axios
      .get("http://localhost/api-laundry/public/api/dashboard", {
        headers: { Authorization: "Bearer " + this.$store.state.token },
      })
      .then((res) => {
        this.data = res.data;
      });
  },
};
</script>