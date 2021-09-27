import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div>
      <Header />
      <div className="row m-2 justify-content-center">
        <div className="col-sm-6 justify-content-center mx-auto">
          <Link to="/votepenasehat">
            <button
              id="submit"
              className="w-50 btn btn-grad mx-auto p-1 m-0 justify-content-center"
            >
              Lanjutkan
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
