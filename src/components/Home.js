export const Home = () =>{
  return(
    <>
      <div class="container">
        <div class="row justify-content-center" style={{marginTop:80}}>
          <div class="col align-self-center introduction">
            <h2 style={{fontSize:60}}>Hello! I'm Jalen Lum.</h2>
            <p>
              I'm a college student studying Computer Science at the Univeristy of Hawai'i 
              at Ma&#773;noa.
            </p>
          </div>
          <div class="col justify-content-center">
            <img 
              src="./images/headshot.jpg" 
              alt="headshot photo" 
              style={{height:600, borderRadius:15}}>
            </img>
          </div>
        </div>
      </div>
    </>
  )
}