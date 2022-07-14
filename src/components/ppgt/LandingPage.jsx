import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function LandingPage() {
  let next = window.localStorage.getItem("next");
  console.log(next, "lalalal");
  // next = 1;
  // const role = 0;
  return (
    <div>
      <Header />
      <div className='mx-auto col-md-8'>
        <div className='m-5'>
          <div className='d-flex justify-content-center mt-4'>
            <Link
              to={next === null ? "/votepage" : "#"}
              style={{
                pointerEvents: next === null ? "unset" : "none",
              }}
            >
              <button
                id='submit'
                href='/votepage'
                className='btn btn-grad mx-auto p-2 border'
                disabled={next === null ? false : true}
              >
                Balon Ketua
              </button>
            </Link>
            <span>&emsp;</span>
            <Link
              to={next === "1" ? "/votepage" : "#"}
              style={{
                pointerEvents: next === "1" ? "unset" : "none",
              }}
            >
              <button
                id='submit'
                className='btn btn-grad mx-auto p-2 border'
                disabled={next === "1" ? false : true}
              >
                Calon Ketua
              </button>
            </Link>
          </div>
          <button
            id='submit'
            className='btn btn-grad mx-auto p-2 mt-4 border'
            hidden={next === "2" ? false : true}
          >
            <p>Anda sudah selesai melilih ketua.</p>
            <p>Terima kasih atas partisispasi Anda.</p>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
