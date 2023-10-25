export const Home = () =>{
  return(
    <>
      <div className="container" id="home">
        <div className="row justify-content-center" style={{marginTop:100}}>
          <div className="col-12 col-xl-7 col-lg-6 align-self-center">
            <h2 style={{fontSize:60}}>Hello! I'm Jalen.</h2>
            <p>
              I'm a college student studying Computer Science at the Univeristy of Hawai'i 
              at Ma&#773;noa.
            </p>
          </div>
          <div className="col-12 col-xl-5 col-lg-6 d-flex justify-content-center">
            <img 
              className="img-fluid"
              src="images/headshot.jpg" 
              alt="headshot" 
              style={{borderRadius:15}}>
            </img>
          </div>
        </div>
      </div>
    </>
  )
}