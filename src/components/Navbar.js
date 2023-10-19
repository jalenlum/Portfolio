export const Navbar = () =>{
  return(
    <>
    <nav className="navbar fixed-top navbar-expand-md navbar-dark navbar-custom">
        <div className="container">
          <a href="top" className="navbar-brand" style={{fontSize:30,fontWeight:600}}>JALEN</a>
          <button className="navbar-toggler" data-bs-toggle="collapse"
          data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#home" className="nav-link links">Home</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link links">About</a>
              </li>
              <li className="nav-item">
                <a href="#resume" className="nav-link links">Resume</a>
              </li>
              {/* <li className="nav-item">
                <a href="#" className="nav-link links">Portfolio</a>
              </li> */}
              <li className="nav-item">
                <a href="#contact" className="nav-link links">Contact</a>
              </li>
            </ul>
          </div>
        </div>   
      </nav> 
    </>
  )
}