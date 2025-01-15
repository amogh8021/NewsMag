const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">NewsMag</span>
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a 
                className="nav-link active" 
                onClick={(e) => {
                  e.preventDefault();
                  setCategory("technology");
                }}
                style={{ cursor: 'pointer' }}
              >
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link active" 
                onClick={(e) => {
                  e.preventDefault();
                  setCategory("business");
                }}
                style={{ cursor: 'pointer' }}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link active" 
                onClick={(e) => {
                  e.preventDefault();
                  setCategory("sports");
                }}
                style={{ cursor: 'pointer' }}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link active" 
                onClick={(e) => {
                  e.preventDefault();
                  setCategory("science");
                }}
                style={{ cursor: 'pointer' }}
              >
                Science
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link active" 
                onClick={(e) => {
                  e.preventDefault();
                  setCategory("health");
                }}
                style={{ cursor: 'pointer' }}
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link active" 
                onClick={(e) => {
                  e.preventDefault();
                  setCategory("entertainment");
                }}
                style={{ cursor: 'pointer' }}
              >
                Entertainment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;