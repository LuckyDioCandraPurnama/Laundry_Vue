<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <!-- Page Heading -->
          <h1 class="h3 mb-2 text-gray-800">DETAIL TRANSAKSI</h1>
          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">
                Data Detail Transaksi
              </h6>
            </div>
            <div class="card-body">
              
              <div class="row align-items-center">
                <div class="col-md-4 text-center">
                  <img
                    class=""
                    src="@/assets/img/profil.jpg" width="200px" height="200px"
                  />
                  <!-- <i class="far fa-user fa-7x text-gray-300"></i> -->
                </div>
                <div class="col">
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase"
                  >
                    Nama
                  </div>
                  <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">
                    {{ transaksi.nama }}
                  </div>
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase"
                  >
                    Tanggal Order
                  </div>
                  <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">
                    {{ transaksi.tgl_order | moment("DD/MM/YYYY") }}
                  </div>
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase"
                  >
                    Batas Waktu
                  </div>
                  <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">
                    {{ transaksi.batas_waktu | moment("DD/MM/YYYY") }}
                  </div>
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase"
                  >
                    Tanggal Bayar
                  </div>
                  <div
                    v-if="transaksi.tgl_bayar == null"
                    class="h6 mb-0 font-weight-bold text-gray-800 mb-2"
                  >
                    Belum Dibayar
                  </div>
                  <div
                    v-else
                    class="h6 mb-0 font-weight-bold text-gray-800 mb-2"
                  >
                    {{ transaksi.tgl_bayar | moment("DD/MM/YYYY") }}
                  </div>
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase"
                  >
                    Status
                  </div>
                  <!-- <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{ transaksi.status }}</div> -->
                  <div
                    v-if="transaksi.status == 'baru'"
                    class="h6 mb-0 font-weight-bold text-gray-800 mb-2"
                  >
                    Baru
                  </div>
                  <div
                    v-if="transaksi.status == 'proses'"
                    class="h6 mb-0 font-weight-bold text-gray-800 mb-2"
                  >
                    Proses
                  </div>
                  <div
                    v-if="transaksi.status == 'selesai'"
                    class="h6 mb-0 font-weight-bold text-gray-800 mb-2"
                  >
                    Selesai
                  </div>
                  <div
                    v-if="transaksi.status == 'diambil'"
                    class="h6 mb-0 font-weight-bold text-gray-800 mb-2"
                  >
                    Diambil
                  </div>
                  <div
                    class="text-xs font-weight-bold text-primary text-uppercase"
                  >
                    Status Pembayaran
                  </div>
                  <div
                    v-if="transaksi.dibayar == 'belum dibayar'"
                    class="h6 mb-0 font-weight-bold text-gray-800 mb-2"
                  >
                    Belum Dibayar
                  </div>
                  <div
                    v-else
                    class="h6 mb-0 font-weight-bold text-gray-800 mb-2"
                  >
                    Sudah Dibayar
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-md-4 text-center">
              <button
                :disabled="disableStatus"
                type="button"
                class="btn btn-warning btn-icon-split"
                @click="ubahStatus(id_transaksi)"
              >
                <span class="icon text-white-50">
                  <i class="fas fa-pen"></i>
                </span>
                <span class="text">Ubah Status Laundry</span>
              </button>
                </div>
              </div>
              <br>
              <br>
              <router-link
                :to="{
                  name: 'report',}">
              <button
                type="button"
                class="btn btn-sm btn-info btn-icon-split mb-3"
              >
                <span class="icon text-white-50">
                  <i class="fas fa-print"></i>
                </span>
                <span class="text">Cetak Struk</span>
              </button>
                        </router-link>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>JENIS</th>
                    <th>JUMLAH (KG / SATUAN)</th>
                    <th>SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(m, index) in detail" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ m.jenis }}</td>
                    <td>{{ m.quantity }}</td>
                    <td>{{ m.subtotal }}</td>
                  </tr>
                  <tr v-if="total != ''">
                    <td colspan="3" class="text-right">Total</td>
                    <td>
                      <h6 class="font-weight-bold">Rp {{ total }}</h6>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                :disabled="disableBayar"
                type="button"
                class="btn btn-success mr-3"
                @click="bayar(id_transaksi)"
              >
                Bayar
              </button>
              <router-link
                v-if="
                  transaksi.status != 'Diambil' &&
                  transaksi.status != 'Selesai' &&
                  transaksi.dibayar != 'dibayar'
                "
                :to="{
                  name: 'tambah_detail',
                  params: { id: this.id_transaksi },
                }"
                class="btn btn-primary"
                >Tambah Detail Transaksi</router-link
              >
              <!-- <br />
              <div class="col-md-4 text-center">
              </div> -->
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
      id_transaksi: this.$route.params.id,
      transaksi: {},
      detail: {},
      total: "",
    };
  },
  created() {
    this.axios
      .get(
        `http://localhost/api-laundry/public/api/transaksi/${this.id_transaksi}`,
        { headers: { Authorization: `Bearer ` + this.$store.state.token } }
      )
      .then((res) => {
        this.transaksi = res.data;
      }),
      this.axios
        .get(
          `http://localhost/api-laundry/public/api/transaksi/detil/${this.id_transaksi}`,
          { headers: { Authorization: `Bearer ` + this.$store.state.token } }
        )
        .then((res) => {
          this.detail = res.data;
        });
    this.axios
      .get(
        `http://localhost/api-laundry/public/api/transaksi/total/${this.id_transaksi}`,
        { headers: { Authorization: `Bearer ` + this.$store.state.token } }
      )
      .then((res) => {
        this.total = res.data.total;
      });
  },

  computed: {
    disableBayar() {
      if (
        this.transaksi.status == "baru" ||
        this.transaksi.status == "proses" ||
        this.transaksi.status == "diambil"
      ) {
        return true;
      } else {
        return false;
      }
    },
    disableStatus() {
      if (
        this.transaksi.status == "selesai" ||
        this.transaksi.status == "diambil" ||
        this.detail.length == 0
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    ubahStatus() {
      if (this.transaksi.status == "baru") {
        this.transaksi.status = "proses"
      } else {
        this.transaksi.status = "selesai"
      }

      this.axios
        .post(
          `http://localhost/api-laundry/public/api/transaksi/status/${this.id_transaksi}`,
          this.transaksi,
          {
            headers: { Authorization: `Bearer ` + this.$store.state.token },
          }
        )
        .then(() => {
          // this.$router.push("/transaksi");
          this.$router.go(3);
        })
        .catch((err) => console.log(err));
    },
    bayar() {
      this.axios
        .post(
          `http://localhost/api-laundry/public/api/transaksi/bayar/${this.id_transaksi}`,
          this.transaksi,
          {
            headers: { Authorization: `Bearer ` + this.$store.state.token },
          }
        )
        .then(() => {
          this.$router.push("/transaksi");
          // this.$router.go(3);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
