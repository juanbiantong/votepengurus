import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div>
      <Header />
      <div className="mx-auto col-md-8">
        <Link to="/votepage">
          <button
            id="submit"
            className="btn btn-grad mx-auto p-2 mt-4 border border-warning"
          >
            Balon Ketua
          </button>
        </Link>
        <Link to="/votepage">
          <button
            id="submit"
            className="btn btn-grad mx-auto p-2 m-3 border border-warning"
          >
            Calon Ketua
          </button>
        </Link>
        <Link to="/votepage">
          <button
            id="submit"
            className="btn btn-grad mx-auto p-2 m-3 border border-warning"
          >
            Balon Sekertaris
          </button>
        </Link>
        <Link to="/votepage">
          <button
            id="submit"
            className="btn btn-grad mx-auto p-2 m-3 border border-warning"
          >
            Calon Sekertaris
          </button>
        </Link>

        <Link to="/votepage">
          <button
            id="submit"
            className="btn btn-grad mx-auto p-2 m-3 border border-warning"
          >
            Balon Bendahara
          </button>
        </Link>
        <Link to="/votepage">
          <button
            id="submit"
            className="btn btn-grad mx-auto p-2 m-3 border border-warning"
          >
            Calon Bendahara
          </button>
        </Link>
        <Link to="/votepenasehat">
          <button
            id="submit"
            className="btn btn-grad mx-auto p-2 m-3 border border-warning"
          >
            Pemilihan Penasehat
          </button>
        </Link>
        <Link to="/votepage">
          <button
            id="submit"
            className="btn btn-grad mx-auto p-2 m-3 border border-warning"
          >
            Pemilihan ulang
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
