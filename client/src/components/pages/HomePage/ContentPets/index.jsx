import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { fetchContentPets } from "../../../../redux/features/petsReducer"
import cl from "./contentPets.module.css"

const ContentPets = ({pets}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContentPets())
  }, [dispatch])

  return (
    <div className="container ">
      <div className="row  my-4  justify-content-around">
        {pets.map((pet, index) => {
          if (index < 3) {
            return (
              <Link
                key={pet._id}
                to={`/pet/${pet._id}`}
                className={`${cl.cardContent} card col-3 m-1 border-0  p-0 text-white`}
              >
                <img
                  src={`http://localhost:6557/${pet.img}`}
                  className={`${cl.cardImg} card-img h-100`}
                  alt="..."
                />
                <div className="card-img-overlay ">
                  <h5 className="text-center fs-2">{pet.header}</h5>
                </div>
              </Link>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export default ContentPets
