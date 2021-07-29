import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function ConfirmPage() {
	return (
    <div className="row justify-content-center w-100 mx-auto">
      <div className="col-md-12 mx-auto mt-1">
        <div className="card border-radius-15">
          <div className="card card-widget widget-user-2 m-0 border-radius-15">
            {/* Add the bg color to the header using any of the bg-* classes */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light m-0 p-0 bg-cust2 border-radius-15">
              {/* Left navbar links */}
              <ul className="navbar-nav">
                <a href="##" className="brand-link">
                  <img
                    src="assets/logogetor.png"
                    alt="logo getor"
                    className="brand-image img-circle elevation-3"
                    style={{ opacity: ".8" }}
                  />
                  <span className="brand-text text-white">Nama Pemilih</span>
                </a>
              </ul>
              {/* Right navbar links */}
              <ul className="navbar-nav ml-auto">
                {/* Messages Dropdown Menu */}

                {/* Notifications Dropdown Menu */}
                <li className="nav-item dropdown"></li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-widget="control-sidebar"
                    data-slide="true"
                    href="##"
                    role="button"
                  >
                    <i className="fas fa-th-large" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="row custom mt-1 col-md-11 mx-auto justify-content-center bg-cust2">
            <div className="mt-1">
              <div className="card card-primary card-outline">
                {/* /.card-header */}
                <div className="card-body p-0 ">
                  <div className="mailbox-read-info pt-2 pb-0 bg-warning ">
                    <h6>
                      <strong>Selamat, hasil Vote anda berhasil!</strong>
                    </h6>
                  </div>
                  <div className="mailbox-read-message">
                    <p className="mb-1">
                      <strong>Hello Olive Tree,</strong>
                    </p>
                    <p className="mb-2">
                      &emsp;Data bakal calon Penatua dan Diaken pilihan anda
                      sudah kami terima.
                    </p>
                    <p className="mb-2">
                      &emsp;Tim kerja pemilihan Penatua dan Diaken akan
                      melaksanakan rapat dan mengonfirmasi bakal calon terpilih.
                      Setelah bakal calon ditetapkan yaitu 2 kali dari jumlah
                      komposisi majelis yang dibutuhkan yakni sebanyak 72 orang
                      yang terdiri dari 36 Penatua dan 36 Diaken, maka
                      selanjutnya akan dilaksanakan pemilihan majelis pada
                      tanggal 12 September 2021, setelah ibadah hari Minggu.
                    </p>
                    <p className="mb-2">
                      &emsp;Harap bapak/ibu bisa mengikuti kembali!
                    </p>
                    <p className="mb-2">
                      &emsp;Mari kita mendoakan agar proses ini bisa berjalan
                      dengan baik dan berkenan bagi Tuhan.
                    </p>
                    <hr className="mt-1 mb-1" />
                    <p className="mb-1">
                      Terima kasih. Tuhan Yesus memberkati.
                    </p>
                    <p className="mb-0 bg-warning text-center">
                      <strong>Panitia Pemilhan Penatua dan Diaken</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-2 justify-content-center">
            <div className="col-sm-2 justify-content-center mx-auto">
              <Link
                className="btn submit-btn mx-auto p-1 m-0 justify-content-center"
                to="/resultpage"
              >
                Tutup Aplikasi
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
