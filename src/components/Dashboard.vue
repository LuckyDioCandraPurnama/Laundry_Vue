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
            <router-link
              to="/report"
              class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i class="fas fa-download fa-sm text-white-50"></i>&nbsp;
              <span>Generate Report</span>
            </router-link>
            <!-- <a
              href="/report"
              class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i class="fas fa-download fa-sm text-white-50"></i> Generate
              Report</a> -->
          </div>
          <div class="row">
            <div class="col-lg-4 mb-4">
              <div class="card shadow mb-4  d-none d-lg-block">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    SELAMAT DATANG
                  </h6>
                </div>
                <div class="card-body">
                  <div class="align-items-center text-center">
                    <img
                      class="img-profile rounded-circle"
                      src="@/assets/img/profil.jpg"
                      width="80%"
                    />
                    <h6 class="m-4 font-weight-bold text-primary">
                      {{ name }}
                    </h6>
                    <hr>
                    <div class="row">
                      <div class="col font-weight-bold text-primary c">
                        {{ role }}
                      </div>
                      <div class="divider d-none d-sm-block"></div>
                      <div class="col font-weight-bold text-primary c">
                        {{ nama_outlet }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- STATISTIK KESELURUHAN -->
            <div class="col-lg-8 mb-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    STATISTIK KESELURUHAN
                  </h6>
                </div>
                <div class="card-body">
                  <div class="row">
                    <!-- Jumlah Member -->
                    <div class="col-lg-6 xl-3 md-6 mb-4">
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
                              <div
                                class="h5 mb-0 font-weight-bold text-gray-800"
                              >
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
                    <div class="col-lg-6 xl-3 md-6 mb-4">
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
                              <div
                                class="h5 mb-0 font-weight-bold text-gray-800"
                              >
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
                  </div>
                  <!-- Jumlah laundry proses -->
                  <div class="row">
                    <div class="col-lg-6 xl-3 md-6 mb-4">
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
                              <div
                                class="h5 mb-0 font-weight-bold text-gray-800"
                              >
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
                    <!-- Selesai -->
                    <div class="col-lg-6 xl-3 md-6 mb-4">
                      <div class="card border-left-secondary shadow h-100 py-2">
                        <div class="card-body">
                          <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                              <div
                                class="
                                  text-xs
                                  font-weight-bold
                                  text-secondary text-uppercase
                                  mb-1
                                "
                              >
                                Selesai Laundry
                              </div>
                              <div
                                class="h5 mb-0 font-weight-bold text-gray-800"
                              >
                                {{ data.selesai }}
                              </div>
                            </div>
                            <div class="col-auto">
                              <i
                                class="fas fa-check fa-2x text-gray-300"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <!-- Utang -->
                    <div class="col-lg-6 xl-3 md-6 mb-4">
                      <div class="card border-left-danger shadow h-100 py-2">
                        <div class="card-body">
                          <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                              <div
                                class="
                                  text-xs
                                  font-weight-bold
                                  text-danger text-uppercase
                                  mb-1
                                "
                              >
                                Belum Dibayar
                              </div>
                              <div
                                class="h5 mb-0 font-weight-bold text-gray-800"
                              >
                                {{ data.utang }}
                              </div>
                            </div>
                            <div class="col-auto">
                              <i class="fas fa-times fa-2x text-gray-300"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Pendapatan -->
                    <div class="col-lg-6 xl-3 md-6 mb-4">
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
                              <div
                                class="h5 mb-0 font-weight-bold text-gray-800"
                              >
                                Rp {{ data.pendapatan }}
                              </div>
                            </div>
                            <div class="col-auto">
                              <i
                                class="fas fa-money-bill fa-2x text-gray-300"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- STATISTIK OUTLET -->
          <div class="card shadow mb-4">
            <div class="card-header c">
              <h5 class="m-0 font-weight-bold text-primary">
                Statistik {{ nama_outlet }}
              </h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-4 xl-3 md-6 mb-4">
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
                            Transaksi
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            {{ data.member_outlet }}
                          </div>
                        </div>
                        <div class="col-auto">
                          <i
                            class="
                              fas
                              fa-file-invoice-dollar fa-2x
                              text-gray-300
                            "
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Jumlah laundry baru -->
                <div class="col-lg-4 xl-3 md-6 mb-4">
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
                            {{ data.baru_outlet }}
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
                <div class="col-lg-4 xl-3 md-6 mb-4">
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
                            {{ data.proses_outlet }}
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-spinner fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <!-- Selesai -->
                    <div class="col-lg-4 xl-3 md-6 mb-4">
                      <div class="card border-left-secondary shadow h-100 py-2">
                        <div class="card-body">
                          <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                              <div
                                class="
                                  text-xs
                                  font-weight-bold
                                  text-secondary text-uppercase
                                  mb-1
                                "
                              >
                                Selesai Laundry
                              </div>
                              <div
                                class="h5 mb-0 font-weight-bold text-gray-800"
                              >
                                {{ data.selesai_outlet }}
                              </div>
                            </div>
                            <div class="col-auto">
                              <i
                                class="fas fa-check fa-2x text-gray-300"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                <!-- Utang -->
                    <div class="col-lg-4 xl-3 md-6 mb-4">
                      <div class="card border-left-danger shadow h-100 py-2">
                        <div class="card-body">
                          <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                              <div
                                class="
                                  text-xs
                                  font-weight-bold
                                  text-danger text-uppercase
                                  mb-1
                                "
                              >
                                Belum Dibayar
                              </div>
                              <div
                                class="h5 mb-0 font-weight-bold text-gray-800"
                              >
                                {{ data.utang_outlet }}
                              </div>
                            </div>
                            <div class="col-auto">
                              <i class="fas fa-times fa-2x text-gray-300"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                <!-- Pendapatan -->
                <div class="col-lg-4 xl-3 md-6 mb-4">
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
                            Rp {{ data.pendapatan_outlet }}
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
          <!-- LAPORAN BULAN INI -->
          <div class="row">
            <div v-if="isOwner" class="col-lg-9 mb-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    LAPORAN BULAN INI
                  </h6>
                </div>
                <div class="card-body">
                  <table class="table table-bordered" cellspacing="0">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Member</th>
                        <th>Tanggal Transaksi</th>
                        <th>Tanggal Pembayaran</th>
                        <th>Nominal Pembayaran</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(t, index) in tabel" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ t.nama }}</td>
                        <td>{{ t.tgl_order | moment("DD/MM/YYYY") }}</td>
                        <td>{{ t.tgl_bayar | moment("DD/MM/YYYY") }}</td>
                        <td>Rp {{ t.total }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div v-if="isAdmin || isKasir" class="col-lg-9 mb-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3 c">
                  <h6 class="m-0 font-weight-bold text-primary">
                    LAPORAN BULAN INI {{ nama_outlet }}
                  </h6>
                </div>
                <div class="card-body">
                  <table class="table table-bordered" cellspacing="0">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Member</th>
                        <th>Tanggal Transaksi</th>
                        <th>Tanggal Pembayaran</th>
                        <th>Nominal Pembayaran</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(t, index) in laporan" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ t.nama }}</td>
                        <td>{{ t.tgl_order | moment("DD/MM/YYYY") }}</td>
                        <td>{{ t.tgl_bayar | moment("DD/MM/YYYY") }}</td>
                        <td>Rp {{ t.total }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div v-if="isAdmin || isKasir" class="col-lg-3 mb-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    Quick Access
                  </h6>
                </div>
                <div class="card-body">
                  <!-- <div class="row"> -->
                  <div v-if="isAdmin" class="">
                    <router-link
                      to="/user/tambah"
                      class="btn btn-success btn-icon-split btn-sm"
                    >
                      <span class="icon text-white-50">
                        <i class="fas fa-user"></i>
                      </span>
                      <span class="text">Tambah User</span>
                    </router-link>
                  </div>
                  <div class="my-2">
                    <router-link
                      to="/member/tambah"
                      class="btn btn-primary btn-icon-split btn-sm"
                    >
                      <span class="icon text-white-50">
                        <i class="fas fa-users"></i>
                      </span>
                      <span class="text">Tambah Member</span>
                    </router-link>
                  </div>
                  <div class="my-2">
                    <router-link
                      to="/transaksi/tambah"
                      class="btn btn-info btn-icon-split btn-sm"
                    >
                      <span class="icon text-white-50">
                        <i class="fas fa-file-invoice-dollar"></i>
                      </span>
                      <span class="text">Tambah Transaksi</span>
                    </router-link>
                  </div>

                  <!-- <div class="col">
                      <h2 class="h3 text-gray-900">Contact</h2>
                      <i class="far fa-envelope"> luckyawan7b@gmail.com</i
                      ><br />
                      <i class="fab fa-facebook-square"> Lucky Purnama</i><br />
                      <i class="fab fa-instagram"> luckydio_27</i><br />
                      <i class="fab fa-github"> LuckyDioCandraPurnama</i><br />
                      <p></p>
                    </div> -->
                  <!-- </div> -->
                </div>
              </div>
            </div>
            <!-- <div class="card shadow mb-4">
              <div
                class="
                  card-header
                  py-3
                  d-flex
                  flex-row
                  align-items-center
                  justify-content-between
                "
              >
                <h6 class="m-0 font-weight-bold text-primary">
                  Revenue Sources
                </h6>
                <div class="dropdown no-arrow">
                  <a
                    class="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                  <div
                    class="
                      dropdown-menu dropdown-menu-right
                      shadow
                      animated--fade-in
                    "
                    aria-labelledby="dropdownMenuLink"
                  >
                    <div class="dropdown-header">Dropdown Header:</div>
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="chart-pie pt-4 pb-2">
                  <canvas id="myPieChart"></canvas>
                </div>
                <div class="mt-4 text-center small">
                  <span class="mr-2">
                    <i class="fas fa-circle text-primary"></i> Direct
                  </span>
                  <span class="mr-2">
                    <i class="fas fa-circle text-success"></i> Social
                  </span>
                  <span class="mr-2">
                    <i class="fas fa-circle text-info"></i> Referral
                  </span>
                </div>
              </div>
            </div> -->
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
      tabel: {},
      laporan: {},
      isAdmin: false,
      isKasir: false,
      isOwner: false,
      nama_outlet: "",
      anu: "",
    };
  },
  created() {
    var user = JSON.parse(this.$store.state.datauser);
    var role = user.role;
    if (role == "admin") this.isAdmin = true;
    else if (role == "kasir") this.isKasir = true;
    else this.isOwner = true;

    var data = JSON.parse(this.$store.state.datauser);
    this.name = data.name;

    var anu = JSON.parse(this.$store.state.datauser);
    this.role = anu.role;

    var outlet = JSON.parse(this.$store.state.dataoutlet);
    var namaoutlet = outlet.nama_outlet;

    this.nama_outlet = namaoutlet;

    this.axios
      .get("http://localhost/api-laundry/public/api/dashboard", {
        headers: { Authorization: "Bearer " + this.$store.state.token },
      })
      .then((res) => {
        this.data = res.data;
      });

    this.axios
      .get("http://localhost/api-laundry/public/api/struk", {
        headers: { Authorization: "Bearer " + this.$store.state.token },
      })
      .then((res) => {
        this.tabel = res.data;
      });
    this.axios
      .get("http://localhost/api-laundry/public/api/transaksi", {
        headers: { Authorization: "Bearer " + this.$store.state.token },
      })
      .then((res) => {
        this.laporan = res.data;
      });
  },
};
</script>