<template>
  <div id="wrapper">
    <sidebar-component></sidebar-component>
    <div id="content-wrapper" class="d-flex flex-column">
      <div class="content">
        <navbar-component></navbar-component>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div class="card card-warning">
                <div class="card-header">
                  <h3 class="card-title">Transaksi</h3>
                </div>
                <form>
                  <div class="card-body">
                    <div class="form-group">
                        <label>Jenis Paket</label>
                      <select class="form-control">
                        <option value="" disabled selected>Pilih Paket</option>
                        <option>Cuci Setrika</option>
                        <option>Cuci Kering</option>
                        <option>Sprei Kecil</option>
                        <option>Sprei Besar</option>
                        <option>Bed Cover</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>Tanggal Order</label>
                      <br>
                      <input  type="date"  name="tgl_order" class="form-control">
                    </div>
                    <div class="form-group">
                      <label>Batas Waktu</label>
                      <br>
                      <input type="date"  name="batas_waktu" class="form-control">
                      
                    </div>
                    <div class="form-group">
                      <label>Tanggal Bayar</label>
                      <br>
                      <input type="date"  name="tgl_bayar" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Status</label>
                      <select class="form-control" placeholder="Status" name="status">
                        <!-- <option value="" disabled selected >Pilih Status</option> -->
                        <option>Baru</option>
                        <option>Proses</option>
                        <option>Selesai</option>
                        <option>Diambil</option>
                      </select>
                    </div>
                    <div class="form-group">
                        <label>Dibayar</label>
                      <select class="form-control" placeholder="Dibayar" name="dibayar">
                        <option>Belum Dibayar</option>
                        <option>Dibayar</option>
                      </select>
                    </div>
                  </div>
                  <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                      Simpan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    <footer-component></footer-component>
    </div>

    
  </div>
</template>