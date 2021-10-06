import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function ConfirmPage() {
  return (
    <div>
      <Header />
      <div className="col-md-12 mx-auto mt-1">
        <div className="card border-radius-15">
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
            <div className="col-sm-6 justify-content-center mx-auto">
              <Link
                className="btn btn-grad submit-btn mx-auto p-1 m-0 justify-content-center"
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
