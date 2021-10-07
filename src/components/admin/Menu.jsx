import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="##" className="brand-link bg-cust">
          <img
            src="assets/logogetor.png"
            alt="logo getor"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Getor Depok</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User"
              />
            </div>
            <div className="info">
              <a href=" " className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <div className="nav-drop">
              <label htmlFor="btn-ketua" className="bg-blue button">
                Pemilihan Ketua
                <span className="fas fa-caret-down" />
              </label>
              <input type="checkbox" id="btn-ketua" />
              <ul>
                <li>
                  <Link to="/admin/addBalon" className="">
                    <button className="btn submit-btn bg-warning w-100">
                      Tambah Balon
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/addBalon" className="">
                    <button className="btn submit-btn bg-warning w-100">
                      Tambah Calon
                    </button>
                  </Link>
                </li>
              </ul>
              <label htmlFor="btn-sek" className="button bg-blue">
                Pemilihan Sekertaris
                <span className="fas fa-caret-down" />
              </label>
              <input type="checkbox" id="btn-sek" />
              <ul>
                <li>
                  <Link to="/admin/addBalon" className="">
                    <button className="btn submit-btn bg-warning w-100">
                      Tambah Balon
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/addBalon" className="">
                    <button className="btn submit-btn bg-warning w-100">
                      Tambah Calon
                    </button>
                  </Link>
                </li>
              </ul>
              <label htmlFor="btn-ben" className="button bg-blue">
                Pemilihan Bendahara
                <span className="fas fa-caret-down" />
              </label>
              <input type="checkbox" id="btn-ben" />
              <ul>
                <li>
                  <Link to="/admin/addBalon" className="">
                    <button className="btn submit-btn bg-warning w-100">
                      Tambah Balon
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/addBalon" className="">
                    <button className="btn submit-btn bg-warning w-100">
                      Tambah Calon
                    </button>
                  </Link>
                </li>
              </ul>
              <label htmlFor="btn-ul" className="button bg-blue">
                Pemilihan Ulang
                <span className="fas fa-caret-down" />
              </label>
              <input type="checkbox" id="btn-ul" />
              <ul>
                <li>
                  <Link to="/admin/addBalon" className="">
                    <button className="btn submit-btn bg-warning w-100">
                      Tambah Balon
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/addBalon" className="">
                    <button className="btn submit-btn bg-warning w-100">
                      Tambah Calon
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
}
