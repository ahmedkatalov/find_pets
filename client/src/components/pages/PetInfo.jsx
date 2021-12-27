import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPets } from "../../redux/features/petsReducer"
import { fetchUsers } from "../../redux/features/categoriesReducer"
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

  // return (
  //   <div className="row">
  //     {pets.map((item) => {
  //       if (item._id === id) {
  //         return (
  //           <div className="p-5">
  //             <div className="row justify-content-between">
  //               <h1 className="s8 p-2">{item.header}</h1>
  //               <img
  //                 className="col-5 rounded float-start img-fluid img-thumbnail"
  //                 src={`http://localhost:6557/${item.img}`}
  //                 alt=""
  //               />
  //               <div className="col">
  //                 <div className="text-center">
  //                   <h1 className=" fs-2 text-center rounded text-wrap">
  //                     {users.map((user) => {
  //                       if (user._id === item.user) {
  //                         return (
  //                           <span>
  //                             {user.firstName} {user.lastName}
  //                           </span>
  //                         )
  //                       }
  //                       return null
  //                     })}
  //                   </h1>
  //                   <button
  //                     type="button"
  //                     className="btn btn-primary btn-lg fs-2"
  //                     onClick={() => handleShowNumber(item.user)}
  //                   >
  //                     Контакты
  //                     <br />
  //                     {number}
  //                   </button>
  //                   {/*<h1 className=" text-center bg-primary text-white rounded text-wrap" onClick={() => handleShowNumber(item.user)}>*/}
  //                   {/*  Контакт:*/}
  //                   {/* <p className='fs-4'>{number}</p>*/}
  //                   {/*</h1>*/}
  //                 </div>
  //                 <hr />
  //                 <div className="p-3">
  //                   <span
  //                     className="fs-5
  //                 "
  //                   >
  //                     Описание:
  //                   </span>
  //                   <h2 className="lead text-muted fs-3">{item.description}</h2>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         )
  //       }
  //       return null
  //     })}
  //   </div>
  // )
}

export default PetInfo
