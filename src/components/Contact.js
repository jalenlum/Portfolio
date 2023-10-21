export const Contact = () => {
  return (
    <div className="container" id="contact">
      <div className="row justify-content-center" style={{marginTop:150}}>
        <div className="col text-center">
          <h1 style={{fontSize:60}}>Contact Me</h1>
          <br/>
          <p>Feel free to reach out to me through this contact form.</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-9 text-center">
          <form action="https://backendform.com/sendform.php/808jalen@gmail.com" method="get">
            <input className="contact-text" placeholder="Your Name" type="text" name="name" />
            <br/>
            <input className="contact-text" placeholder="Your Email" type="email" name="email"/>
            <br/>
            <input className="contact-text" placeholder="Your Message" type="text" name="message" style={{height:150, paddingBottom:115}}/>
            <br/>
            <button className="contact-button" type="submit"> Submit </button>
            <input type="hidden" name="fromwebsite" value="Portfolio Website" />
            <input type="hidden" name="redirect" value="https://jalenlum.com/"/>
          </form>
        </div>
      </div>
    </div>
  );
};
