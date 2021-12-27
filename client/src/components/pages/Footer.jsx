import React from "react"

const Footer = () => {
  return (
    <footer className="footer mt-4 py-3 bg-light bottom ">
      <div className="d-flex justify-content-center align-items-center">
        <div className="">
          <a
            href="http://instagram.com/intocode"
            className="text-danger m-2 fs-5"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram "></i>
          </a>
        </div>
        <div className=" ">
          <a
            href="http://facebook.com"
            className="text-primary m-2 fs-5"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
        </div>
        <div className=" ">
          <a
            href="https://www.youtube.com/watch?v=9taj4TuR3VA"
            className="text-danger m-2 fs-5"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </div>
        <div className=" ">
          <a
            href="https://twitter.com/?lang=ru"
            className="text-info m-2 fs-5"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
