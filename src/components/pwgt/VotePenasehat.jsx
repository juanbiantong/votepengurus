import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./Header";
export default function VotePenasehat() {
  const [data, setData] = useState([]);
  const [totalPenasehat, setTotalPenasehat] = useState(0);
  //   const [totalDiaken, setTotalDiaken] = useState(0);
  const [disable, setDisable] = useState(true);
  const [vote, setVote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://my-json-server.typicode.com/JuanBiantong/db_anggota/anggota"
      );
      setData(res.data);
    };
    fetchData();
  }, []);

  const handleCheckbox = (even) => {
    let penasehatCheck = Array.from(
      document.getElementsByClassName(`penasehat`)
    );

    data.map((d, index) => {
      let myCheckbox = document.getElementsByName(`vote${d.id}`);
      if (even.target.name === `vote${d.id}` && even.target.checked) {
        //pilih salahsatu checkbox tiap row
        myCheckbox.forEach((element) => {
          element.checked = false;
        });
        even.target.checked = true;
      }

      //manipulate data penasehat
      if (`vote${d.id}` === even.target.id) {
        let tmp_array = data;
        if (even.target.value === "penasehat" && even.target.checked) {
          tmp_array[index].penasehat = 1;
          setData(tmp_array);
        } else {
          tmp_array[index].penasehat = 0;
          setData(tmp_array);
        }

        let tmp_vote = data.filter(function (el) {
          return el.penasehat === 1;
        });
        setVote(tmp_vote);
        if (
          penasehatCheck.filter((item) => {
            return item.checked;
          }).length === 5
        ) {
          Swal.fire({
            position: "center",
            icon: "warning",
            html: "<strong>Batas Maksimum Pilihan Penasehat</strong>",
            showConfirmButton: true,
            confirmButtonColor: "#ec9e0d",
          });
        }
      }

      //handle disable checkbox base on maximum length
      if (
        penasehatCheck.filter((item) => {
          return item.checked;
        }).length === 5
      ) {
        penasehatCheck.forEach((element) => {
          if (element.checked === false) {
            element.disabled = true;
          }
        });
      } else {
        penasehatCheck.forEach((element) => {
          if (element.checked === false) {
            element.disabled = false;
          }
        });
      }
      return d;
    });

    setTotalPenasehat(
      penasehatCheck.filter((item) => {
        return item.checked;
      }).length
    );
  };

  console.log(vote, "ssss");

  //handle confirmatin checkbox
  const handleDisable = (even) => {
    let penasehatCheck = Array.from(
      document.getElementsByClassName(`penasehat`)
    );

    if (totalPenasehat === 0) {
      Swal.fire({
        position: "center",
        icon: "warning",
        html: "<strong>Anda belum memilih penasehat!</strong>",
        showConfirmButton: true,
        confirmButtonColor: "#ec9e0d",
      });
      $(".vote").prop("checked", false);
    }
    if (even.target.value === "status" && even.target.checked) {
      penasehatCheck.forEach((element) => {
        element.disabled = true;
      });
      setDisable(false);
    } else {
      if (
        penasehatCheck.filter((item) => {
          return item.checked;
        }).length === 5
      ) {
        penasehatCheck.forEach((element) => {
          if (element.checked === true) {
            element.disabled = false;
          }
        });
      } else {
        penasehatCheck.forEach((element) => {
          element.disabled = false;
        });
      }

      setDisable(true);
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

            <div className="card-footer bg-light pt-1 pr-2 pl-2 pb-0">
              <ul className="nav flex-column ">
                <li className="nav-item">
                  <strong className="mr-2 ml-2 p-0 float-right opacity-25">
                    Calon Penasehat yang anda pilih:
                  </strong>
                </li>
                {vote.map((item, index) => {
                  return (
                    <li key={index} className="nav-item p-1">
                      <strong className="mr-2 ml-2 p-1 float-right badge badge-warning">
                        {index + 1}. {item.name}
                      </strong>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="row custom m-1 col-md-11 mx-auto justify-content-center pb-3 pr-1 pl-1 bg-cust2">
            <div className="card-header col-md-10 pt-0 pb-0 mt-2 mb-0">
              <h6 className="float-left text-bold text-white">DAFTAR CALON</h6>
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
              <table className="table tableFixHead table-bordered table-striped table-xs">
                <thead className="m-0 ">
                  <tr>
                    <th className="p-1 m-0 text-center bg-warning">Nama Lengkap</th>
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
                                opacity: ".9",
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
                              opacity: ".9",
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
                                    name={`vote${item.id}`}
                                    onChange={handleCheckbox}
                                    className={`penasehat`}
                                    value="penasehat"
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
            <div className="d-flex mt-2 mb-0 p-1 bg-warning rounded flex-column">
              <label className="m-0 pl-2 pr-2">
                Centang (✓) jika sudah yakin dengan pilihan anda, lalu klik
                Vote!&nbsp;
                <input
                  id="vote"
                  type="checkbox"
                  value="status"
                  onChange={handleDisable}
                  name={`vote`}
                  className="vote"
                />
              </label>
            </div>
          </div>
          <div className="row m-2 justify-content-center">
            <div className="col-sm-2 justify-content-center mx-auto">
              <Link to="/confirmpage">
                <button
                  id="submit"
                  className="w-50 btn btn-grad mx-auto p-1 m-0 justify-content-center"
                  disabled={disable}
                >
                  Vote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
