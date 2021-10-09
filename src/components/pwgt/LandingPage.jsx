import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function LandingPage() {
  const role = 0;
  return (
    <div>
      <Header />
      <div className="mx-auto col-md-8">
        <div className="d-flex justify-content-center mt-4">
          <Link
            to={role === 0 ? "/votepage" : "#"}
            style={{ pointerEvents: role === 0 ? "unset" : "none" }}
          >
            <button
              id="submit"
              href="/votepage"
              className="btn btn-grad mx-auto p-2 border"
              disabled={role === 0 ? false : true}
            >
              Balon Ketua
            </button>
          </Link>
          <span>&emsp;</span>
          <Link
            to={role === 1 ? "/votepage" : "#"}
            style={{ pointerEvents: role === 1 ? "unset" : "none" }}
          >
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border"
              disabled={role === 1 ? false : true}
            >
              Calon Ketua
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-center m-3">
          <Link
            to={role === 2 ? "/votepage" : "#"}
            style={{ pointerEvents: role === 2 ? "unset" : "none" }}
          >
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border"
              disabled={role === 2 ? false : true}
            >
              Balon Wakil Ketua
            </button>
          </Link>
          <span>&emsp;</span>
          <Link
            to={role === 3 ? "/votepage" : "#"}
            style={{ pointerEvents: role === 3 ? "unset" : "none" }}
          >
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border"
              disabled={role === 3 ? false : true}
            >
              Calon Wakil Ketua
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-center m-3">
          <Link
            to={role === 4 ? "/votepage" : "#"}
            style={{ pointerEvents: role === 4 ? "unset" : "none" }}
          >
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border"
              disabled={role === 4 ? false : true}
            >
              Balon Sekretaris
            </button>
          </Link>
          <span>&emsp;</span>
          <Link
            to={role === 5 ? "/votepage" : "#"}
            style={{ pointerEvents: role === 5 ? "unset" : "none" }}
          >
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border"
              disabled={role === 5 ? false : true}
            >
              Calon Sekretaris
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-center m-3">
          <Link
            to={role === 6 ? "/votepage" : "#"}
            style={{ pointerEvents: role === 6 ? "unset" : "none" }}
          >
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border"
              disabled={role === 6 ? false : true}
            >
              Balon Wakil Sekretaris
            </button>
          </Link>
          <span>&emsp;</span>
          <Link
            to={role === 7 ? "/votepage" : "#"}
            style={{ pointerEvents: role === 7 ? "unset" : "none" }}
          >
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border"
              disabled={role === 7 ? false : true}
            >
              Calon Wakil Sekretaris
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-center m-3">
          <Link
            to={role === 8 ? "/votepage" : "#"}
            style={{ pointerEvents: role === 8 ? "unset" : "none" }}
          >
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border"
              disabled={role === 8 ? false : true}
            >
              Balon Bendahara
            </button>
          </Link>
          <span>&emsp;</span>
          <Link
            to={role === 9 ? "/votepage" : "#"}
            style={{ pointerEvents: role === 9 ? "unset" : "none" }}
          >
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border"
              disabled={role === 9 ? false : true}
            >
              Calon Bendahara
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-center m-3">
          <Link
            to={role === 10 ? "/votepage" : "#"}
            style={{ pointerEvents: role === 10 ? "unset" : "none" }}
          >
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border"
              disabled={role === 10 ? false : true}
            >
              Balon Wakil Bendahara
            </button>
          </Link>
          <span>&emsp;</span>
          <Link
            to={role === 11 ? "/votepage" : "#"}
            style={{ pointerEvents: role === 11 ? "unset" : "none" }}
          >
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border"
              disabled={role === 11 ? false : true}
            >
              Calon Wakil Bendahara
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-center m-3">
          <Link
            to={role === 12 ? "/votepage" : "#"}
            style={{ pointerEvents: role === 12 ? "unset" : "none" }}
          >
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border"
              disabled={role === 12 ? false : true}
            >
              Pemilihan Penasehat
            </button>
          </Link>
          <span>&emsp;</span>
          <Link
            to={role === 13 ? "/votepage" : "#"}
            style={{ pointerEvents: role === 13 ? "unset" : "none" }}
          >
            <button
              id="submit"
              className="btn btn-grad mx-auto p-2 border"
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
