export const About = () =>{
    return(
      <>
        <div class="container" id="about">
          <div class="row justify-content-center" style={{marginTop:150}}>
            <div class="col-12 col-lg-4 justify-content-center">
              <img 
                className="img-fluid"
                src="images/about.jpg" 
                alt="snow"
                style={{borderRadius:15}}>
              </img>
            </div>
            <div class="col-12 col-lg-8">
              <h1 style={{fontSize:60}}>About Me</h1>
              <p>
                Hi! My name is Jalen Lum, and i'm currently pursuing my Bachelor's in Computer Science
                at the University of Hawai'i at Ma&#773;noa in hopes of becoming a software developer.
                I was born and raised in Hawai'i on the island of Oahu, where I developed a deep passion
                for using technology to make a positive impact on the world. I'm aspiring to improve my
                skills as a software developer, and I'm eager to do so by collaborating with and learning
                from experienced professionals.
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }