export const Contact = () => {
  return (
    <div className="container" id="contact">
      <div className="row justify-content-center" style={{marginTop:150}}>
        <div className="col text-center">
          <h1 style={{fontSize:60}}>Contact</h1>
        </div>
      </div>
      <div className="row justify-content-center" style={{marginTop:30}}>
        <div className="col d-flex justify-content-center">
          <form action="https://backendform.com/sendform.php/808jalen@gmail.com" method="get">
            <label> name </label>
            <br/>
            <input type="text" name="name" />
            <br/>
            <label> email </label>
            <br/>
            <input type="email" name="email" />
            <br/>
            <label> message </label>
            <br/>
            <input type="text" name="message" />
            <br/>
            <br/>
            <button type="submit"> Submit </button>
            <input type="hidden" name="Portfolio Website" value="jalenlum.com" />
            <input type="hidden" name="Jalen Lum" value="jalenlum.com" />
          </form>
        </div>
      </div>
    </div>
  );
};
