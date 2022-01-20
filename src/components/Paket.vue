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
                  <h3 class="card-title">Paket</h3>
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
                      <label>Harga</label>
                      <input type="text" name="harga" class="form-control" />
                    </div>

                    <div class="card-footer">
                      <button type="submit" class="btn btn-primary">
                        Simpan
                      </button>
                    </div>
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