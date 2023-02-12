class Nav extends React.Component () {
    return (
      <nav className="navbar navbar-expand-lg bg-primary p-3" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          Navbar
          </a>
          <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                    Home
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Link
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
            <form className="d-flex w-75" role="search">
                <input
                className="form-control me-2 w-75"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
              <button className="btn btn-outline-dark bg-warning p-3" type="submit" 
                style={{
                  backgroundImage: 'url("../assets/svgs/magnifying-glass.svg")', 
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: '60%'
                }}
              >
              </button>
            </form>
          </div>
        </div>
      </nav>
    )
}