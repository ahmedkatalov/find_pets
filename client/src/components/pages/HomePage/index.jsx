import React from "react"
import slide1 from "./slide1.jpg"
import slide2 from "./slide2.jpg"
import slide3 from "./slide3.jpg"
import img from "./pes.png"
import img2 from "./koshki.png"
import ContentPets from "./ContentPets"
import cl from "./homePage.module.css"
import {useSelector} from "react-redux";

const HomePage = () => {

  const pets = useSelector((state) => state.pets.pets.reverse())

  return (
    <div className="">
      <div
        id="carouselExampleFade"
        className="carousel carousel-dark slide carousel-fade border-bottom border-1 "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active ">
            <img src={slide1} className="d-block  w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
      <ContentPets pets={pets}/>
      <div className="container">
        <div className={`d-flex justify-content-between ${cl.stick}`}>
          <div className="d-flex col-6 g-0 h-100 border rounded me-2 ">
            <img src={img} className="img-fluid h-100" alt="..." />
            <p className="card-text w-75  px-2 py-3 fs-6 ">
              Животные более настоящие, чем люди. Они не хотят тебе льстить, не
              хотят производить на тебя какое-то впечатление. Ничего показного.
              Какие они есть, такие и есть, как камни и цветы или как звезды на
              небе.
            </p>
          </div>
          <div className="d-flex col-6 g-0 h-100 border rounded-3 ms-2">
            <p className="card-text  px-2 py-3 fs-6 ">
              Не бросайте животных , они самые преданные и любят вас независимо
              от того, кто вы и сколько у вас денег.
            </p>
            <img src={img2} className="img-fluid  h-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
