import React from "react";

export const Navbar = ({ setSearchOn, setCatagory, search, setSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchOn(true);
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div className="navbar-brand">
          <span className="badge text-dark bg-light fs-4">News Mag</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 20px",
          }}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <div
                onClick={() => setCatagory("general")}
                className="nav-link "
                style={{ cursor: "pointer" }}
              >
                General
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => setCatagory("entertainment")}
                style={{ cursor: "pointer" }}
                className="nav-link "
              >
                entertainment
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => setCatagory("business")}
                style={{ cursor: "pointer" }}
                className="nav-link "
              >
                business
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => setCatagory("science")}
                style={{ cursor: "pointer" }}
                className="nav-link "
              >
                science
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => setCatagory("health")}
                style={{ cursor: "pointer" }}
                className="nav-link "
              >
                health
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => setCatagory("sports")}
                style={{ cursor: "pointer" }}
                className="nav-link "
              >
                sports
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => setCatagory("technology")}
                style={{ cursor: "pointer" }}
                className="nav-link"
              >
                technology
              </div>
            </li>
          </ul>
          <form
            style={{ borderRadius: "30%" }}
            className="d-flex"
            role="search"
            onSubmit={handleSubmit}
          >
            <input
              className="form-control me-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Something... "
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
