export const Resume = () =>{
  return(
    <>
      <div className="container" id="resume">
        <div className="row justify-content-center" style={{marginTop:150}}>
          <div className="col text-center">
            <h1 style={{fontSize:60}}>Resume</h1>
          </div>
        </div>
        <div className="row justify-content-center" style={{marginTop:30}}>
          <div className="col d-flex justify-content-center">
            <div className="embed-container">
              <embed src="pdfs/resume.pdf#toolbar=0" type="" className="resume-pdf" style={{width:750, height:940}}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}