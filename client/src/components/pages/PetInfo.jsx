import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPets } from "../../redux/features/pets/petsFunc"
import { fetchUsers } from "../../redux/features/categories/categoriesFunc"
import { useParams } from "react-router"

const PetInfo = () => {
  const [number, setNumber] = useState("Телефон")

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPets())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const pets = useSelector((state) => state.pets.pets)
  const users = useSelector((state) => state.categories.users)

  const handleShowNumber = (user) => {
    users.find((item) => {
      if (item._id === user) {
        setNumber(item.phone)
      }
      return null
    })
  }

  const { id } = useParams()

  return (
    <div className="container">
      {pets.map((item) => {
        if (item._id === id) {
          return (
            <div key={item.id} className="card my-4">
              <div className="row g-0">
                <div className="col-md-6 border-end text-center">
                  <img
                    src={`http://localhost:6557/${item.img}`}
                    className="img-fluid rounded"
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h3 className="card-title">{item.header}</h3>
                    <hr />
                    <p className="card-text">{item.description}</p>
                    <hr />
                    {users.map((user) => {
                      if (user._id === item.user) {
                        return (
                          <>
                            <h5 key={user._id}>
                              {`Владелец: ${user.firstName} ${user.lastName}`}
                            </h5>
                            <p>
                              {`Почта: `}
                              <a href="mailto:{user.mail}">{user.mail}</a>{" "}
                            </p>
                          </>
                        )
                      }
                      return null
                    })}
                    <span
                      type="button"
                      className="btn btn-info"
                      onClick={() => handleShowNumber(item.user)}
                    >
                      {number}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        return null
      })}
    </div>
  )
}

export default PetInfo
