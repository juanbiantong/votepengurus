import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function LandingPage() {
  const role = 1;
  return (
    <div>
      <Header />
      <div className="mx-auto col-md-8">
        <div className="d-flex justify-content-center mt-4">
          <Link to="/votepage">
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border border-warning"
              disabled={role === 0 ? false : true}
            >
              Balon Ketua
            </button>
          </Link>
          <span>&emsp;</span>
          <Link to="/votepage">
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border border-warning"
              disabled={role === 1 ? false : true}
            >
              Calon Ketua
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-center m-3">
          <Link to="/votepage">
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border border-warning"
              disabled={role === 2 ? false : true}
            >
              Balon Wakil Ketua
            </button>
          </Link>
          <span>&emsp;</span>
          <Link to="/votepage">
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border border-warning"
              disabled={role === 3 ? false : true}
            >
              Calon Wakil Ketua
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-center m-3">
          <Link to="/votepage">
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border border-warning"
              disabled={role === 4 ? false : true}
            >
              Balon Sekretaris
            </button>
          </Link>
          <span>&emsp;</span>
          <Link to="/votepage">
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border border-warning"
              disabled={role === 5 ? false : true}
            >
              Calon Sekretaris
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-center m-3">
          <Link to="/votepage">
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border border-warning"
              disabled={role === 6 ? false : true}
            >
              Balon Wakil Sekretaris
            </button>
          </Link>
          <span>&emsp;</span>
          <Link to="/votepage">
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border border-warning"
              disabled={role === 7 ? false : true}
            >
              Calon Wakil Sekretaris
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-center m-3">
          <Link to="/votepage">
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border border-warning"
              disabled={role === 8 ? false : true}
            >
              Balon Bendahara
            </button>
          </Link>
          <span>&emsp;</span>
          <Link to="/votepage">
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border border-warning"
              disabled={role === 9 ? false : true}
            >
              Calon Bendahara
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-center m-3">
          <Link to="/votepage">
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border border-warning"
              disabled={role === 10 ? false : true}
            >
              Balon Wakil Bendahara
            </button>
          </Link>
          <span>&emsp;</span>
          <Link to="/votepage">
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border border-warning"
              disabled={role === 11 ? false : true}
            >
              Calon Wakil Bendahara
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-center m-3">
          <Link to="/votepenasehat">
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border border-warning"
              disabled={role === 12 ? false : true}
            >
              Pemilihan Penasehat
            </button>
          </Link>
          <span>&emsp;</span>
          <Link to="/votepage">
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border border-warning"
              disabled={role === 13 ? false : true}
            >
              Pemilihan Ulang
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
