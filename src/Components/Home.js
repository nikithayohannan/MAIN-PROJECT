import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {

  useEffect(()=>{

    fetch('http://127.0.0.1:8000/testget').then((response)=>{
      response.json().then((data)=>{
        console.log(data)
      })
    })

  },[])


  const sendData=()=>{ 

    let param = {
      name:'aslam',
      email:'aslam@gmail.com'
    }

    fetch('http://127.0.0.1:8000/testpost',{
      method:"POST",
      body:JSON.stringify(param),
    }).then((response)=>{
      response.json((data)=>{
        console.log(data)
      })
    })

  }

  return (
    <>
      <main>

        <header className="site-header">
          <div className="container">
            <div className="row justify-content-between">

              <div className="col-lg-12 col-12 d-flex align-items-center">
                <a className="site-header-text d-flex justify-content-center align-items-center me-auto" href="">
                  <i className="bi-box"></i>
                  <span>
                   Fake Job Detection
                  </span>
                </a>

                <ul className="social-icon d-flex justify-content-center align-items-center mx-auto">
                </ul>

               

                <a className="bi-list offcanvas-icon" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu"></a>

              </div>

            </div>
          </div>
        </header>

        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body d-flex flex-column justify-content-center align-items-center">
            <nav>
              <ul>
                <li>
                <Link to="/login">Login Form</Link> 
                </li>

                <li>
               <Link  to="/register"> Create an account</Link>
                </li>

               

               
              </ul>
            </nav>
          </div>
        </div>

        

        <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
          <div className="container">
            <div className="row">

              <div className="col-lg-6 col-12 mx-auto">
                <small>Detecting fake jobs is crucial for verifying employment legitimacy and safety.

                </small>

                <h1 className="text-white mt-2 mb-4 pb-2">
                JobGuard: Detecting Fake Jobs
                </h1>

         
              </div>
            </div>
          </div>

          <div className="video-wrap">
            <video autoPlay loop muted className="custom-video" poster="">
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>


        {/* <div>

          <button onClick={()=>{sendData()}}>Send Response</button>
        </div> */}

      </main>
    </>
  );
}

export default Home;
