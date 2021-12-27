import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {fetchPets, removeCardPet} from "../../redux/features/petsReducer"

const Pets = () => {
  const dispatch = useDispatch()

    const user = useSelector(state => state.signIn.userDate)

    useEffect(() => {
    dispatch(fetchPets())
  }, [dispatch])

  const pets = useSelector((state) => state.pets.pets.reverse())

    const handleRemoveCard = (id) => {
      dispatch(removeCardPet(id))
    }

  return (
    <div className="container mt-4">
      <div className="row row-cols-lg-3  row-cols-md-2 row-cols-sm-1 row-cols-1 g-4">
        {pets.map((pet) => (
          <div className="col" key={pet._id}>
            <div className="card h-100  border-0 shadow">
              <img
                src={`http://localhost:6557/${pet.img}`}
                className="card-img-top  rounded   h-50"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title ">{pet.header}</h5>
                <hr />
                <p className="card-text  h-25">
                  {pet.description.substring(0, 65)} . . .
                </p>
                <hr />
                  {pet.user === user._id? <div className="d-flex justify-content-around">
                      <Link
                          to={`/pet/${pet._id}`}
                          className="btn btn-primary w-40 fs-4 mt-4 "
                      >
                          Описание
                      </Link>
                      <span
                      className="btn btn-danger w-40 fs-4 mt-4"
                      onClick={()=>handleRemoveCard(pet._id)}
                  >
                      Удалить
                  </span>
                  </div>:
                      <Link
                      to={`/pet/${pet._id}`}
                      className="btn btn-primary w-100 fs-4 mt-4 "
                  >
                      Описание
                  </Link>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pets
