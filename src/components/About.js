export const About = () =>{
    return(
      <>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col d-flex justify-content-center" style={{marginTop:150}}>
              <img 
                src="./images/headshot.jpg" 
                alt="headshot photo"
                style={{height:450,borderRadius:15}}>
              </img>
            </div>
            <div class="col-8" style={{marginTop:150}}>
              <h1 style={{fontSize:60}}>About Me</h1>
              <p>
                Hello! My name is Jalen Lum, and i'm currently a student at the University of 
                Hawai'i at Ma&#773;noa, pursuing a Bachelor's of Science Degree in Computer Science.
                
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }