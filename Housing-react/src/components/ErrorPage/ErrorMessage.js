import React from 'react'
import Footer from "../Footer"
function ErrorMessage({ErrorMsg}) {
    return (
    <>
        <div className="bg-light text-dark text center">
          <h1 className="text-center">
            Sorry could Not found what you are looking for
            <h2 className="text-center mt-5"> 404 Page not found Error</h2>
          </h1>
          <a href="/">
           <h4 className="mt-5 mb-5 text-center "> Click here to revert Main page</h4>
          </a>
        </div>
        <Footer/>
    </>
    )
}

export default ErrorMessage
