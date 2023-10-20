export const Home = () =>{
  return(
    <>
      <div className="container" id="home">
        <div className="row justify-content-center" style={{marginTop:80}}>
          <div className="col-lg align-self-center introduction">
            <h2 style={{fontSize:60}}>Hello! I'm Jalen Lum.</h2>
            <p>
              I'm a college student studying Computer Science at the Univeristy of Hawai'i 
              at Ma&#773;noa.
            </p>
          </div>
          <div className="col-lg d-flex justify-content-center">
            <img 
              src="images/headshot.jpg" 
              alt="headshot" 
              style={{height:600, borderRadius:15}}>
            </img>
          </div>
        </div>
      </div>
    </>
  )
}