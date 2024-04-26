import React from 'react'
import Nav from './Nav'

function Job() {
  return (
   <>
   <Nav logout='true'/>
   <section className="hero-section d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12 mx-auto">
                            <form className="custom-form contact-form" role="form" method="post">
                                <h2 className="hero-title text-center mb-4 pb-2">Verify Job</h2>

                                <div className="row">
                                   

                                    

                                    <div className="col-lg-12 col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" id="message" name="message" placeholder="Message"></textarea>
                                            
                                            <label for="floatingTextarea">Enter Job Link</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-10 mx-auto">
                                        <button type="submit" className="form-control">Send </button>
                                    </div>
                                </div>

                            </form>
                            
                        </div>
                    </div>
                </div>
            </section>
   </>
  )
}

export default Job