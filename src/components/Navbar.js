import {Link} from 'react-scroll'

export const Navbar = () =>{
  return(
    <>
    <nav class="navbar fixed-top navbar-expand-md navbar-dark navbar-custom">
        <div class="container">
          <a href="#top" class="navbar-brand" style={{fontSize:30,fontWeight:600}}>JALEN</a>
          <button class="navbar-toggler" data-bs-toggle="collapse"
          data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="nav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#top" class="nav-link links">Home</a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link links">About</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link links">Portfolio</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link links">Contact</a>
              </li>
            </ul>
          </div>
        </div>   
      </nav> 
    </>
  )
}