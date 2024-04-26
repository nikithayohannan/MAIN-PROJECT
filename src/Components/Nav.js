import React from 'react'

function Nav(props) { 
  const logout=()=>{
    localStorage.clear()
    window.location.href = '/'
  }
  return (
    <>
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
                {
                  props?.logout?(
                <a className="site-header-text d-flex justify-content-center align-items-center me-auto" onClick={()=>logout()}>
                   
                  <span>
                      Logout
                  </span>
                </a>

                  ):(
                    ''
                  )
                }
              </div>

            </div>
          </div>
        </header>
        <div className="video-wrap">
            <video autoPlay loop muted className="custom-video" poster="">
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
    
    </>
  )
}

export default Nav