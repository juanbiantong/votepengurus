import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import Footer from "./Footer";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./Header";

export default function VotePage() {
  const [data, setData] = useState([]);
  const [vote, setVote] = useState(null);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://my-json-server.typicode.com/JuanBiantong/db_anggota/anggota"
      );
      setData(res.data);
    };
    fetchData();
  }, []);

  const handleCheckbox = (event) => {
    data.map((d, index) => {
      let myCheckbox = document.getElementsByName(`vote`);
      if (event.target.name === `vote` && event.target.checked) {
        //pilih salahsatu checkbox tiap row
        myCheckbox.forEach((element) => {
          element.checked = false;
        });
        event.target.checked = true;
      }
      if (event.target.id === `vote${d.id}` && event.target.checked) {
        setVote({
          name: d.name,
          category: d.category,
          count: 1,
        });
        setDisable(false);
      }
      if (event.target.id === `vote${d.id}` && event.target.checked === false) {
        setVote(null);
        setDisable(true);
      }

      return d;
    });
  };

  const handleVote = (event) => {
    event.preventDefault();
    if (event.target.id === "submit") {
      Swal.fire({
        html: `<p>Apakah anda yakin mencalonkan <span class="badge badge-warning">${vote.name}</span>?</p>`,
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "#ec9e0d",
        confirmButtonColor: "#019185",
        cancelButtonText: "Tidak",
        confirmButtonText: "Yakin",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            html: `<p>Selamat, pilihan anda telah tersimpan</p>`,
            icon: "success",
            confirmButtonColor: "#019185",
            confirmButtonText: "OK",
          })
            .then((result) => {
              if (result.isConfirmed) {
              window.location = "/confirmpage";
              }
            })
            .catch((o_o)=> {
              console.error(o_o); // "oh, no!"
            });
        }
      });
    }
  };

  //untuk fungsi search berdasarkan sektor dan nama balon
  $(document).ready(function () {
    //filter search ballon
    $("#myInput").on("keyup", function () {
      let value = $(this).val().toLowerCase();
      if (value !== "") {
        $(".sektor").removeClass("active");
      } else {
        $("#all").addClass("active");
      }
      $("#myTable tr").filter(function () {
        return $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });

    //filter search review pilihan
    $("#myInput2").on("keyup", function () {
      let value = $(this).val().toLowerCase();
      if (value !== "") {
        $(".sektor2").removeClass("active");
      } else {
        $("#all2").addClass("active");
      }
      $("#myTable2 tr").filter(function () {
        return $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });
  return (
    <div className="row justify-content-center w-100 mx-auto">
      <div className="col-md-12 p-0">
        <div className="card border-radius-15">
          <Header />
          <div className="card card-widget widget-user-2 m-0 border-radius-15">
            {/* Add the bg color to the header using any of the bg-* classes */}

            <div className="card-footer bg-light pr-2 pl-2">
              <ul className="nav flex-column ">
                <li className="nav-item ">
                  <p>
                    <strong className="mr-2 ml-2 p-0 float-right">
                      Balon pilihan anda:
                      <strong className="badge badge-warning m-1 p-2">
                        {vote === null ? "Anda belum memilih" : vote.name}
                      </strong>
                    </strong>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="row custom m-1 col-md-11 mx-auto justify-content-center pb-3 pr-1 pl-1 bg-cust2">
            <div className="card-header col-md-10 pt-0 pb-0 mt-2 mb-0">
              <h6 className="float-left text-bold text-white">DAFTAR BALON</h6>
              <div className="card-tools">
                <div className="input-group input-group-sm search-width">
                  <input
                    type="text"
                    name="table_search"
                    id="myInput"
                    className="form-control float-right"
                    placeholder="Cari nama calon.."
                  />
                </div>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body table-responsive p-0 col-md-10 table-height">
              <table className="table tableFixHead table-striped table-xs">
                <thead className="m-0">
                  <tr>
                    <th className="p-1 m-0 text-center bg-warning">
                      Nama Lengkap
                    </th>
                    <th className="p-1 m-0 text-center bg-warning">Jabatan</th>
                  </tr>
                </thead>
                <tbody id="myTable">
                  {data.map((item, i) => {
                    return (
                      <Fragment key={i}>
                        <tr style={{ width: "100%" }}>
                          <td className="p-1 m-0 text-center w-50 rounded mx-auto">
                            <div
                              className="p-2 rounded border mx-auto col-lg-4 "
                              style={{
                                opacity: ".8",
                                boxSizing: "border-box",
                                verticalAlign: "middle",
                              }}
                            >
                              <p className="m-0">
                                <strong>{item.name}</strong>
                              </p>
                            </div>
                          </td>
                          <td
                            className="p-1 m-0 "
                            style={{
                              width: "50%",
                              verticalAlign: "middle",
                            }}
                          >
                            <form className="custom2">
                              <div className="">
                                <label className="container">
                                  <input
                                    id={`vote${item.id}`}
                                    type="checkbox"
                                    name={`vote`}
                                    onChange={handleCheckbox}
                                    className={`vote`}
                                  />
                                  <span className="checkmark" />
                                </label>
                              </div>
                              <strong className="ml-2">{item.category}</strong>
                            </form>
                          </td>
                        </tr>
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row m-2 justify-content-center">
            <div className="col-sm-6 justify-content-center mx-auto">
              <button
                id="submit"
                className="w-50 btn btn-grad mx-auto p-1 m-0 justify-content-center"
                onClick={handleVote}
                disabled={disable}
              >
                Vote
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
