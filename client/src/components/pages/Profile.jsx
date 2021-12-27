import React, {useEffect, useState} from 'react'
import {exitInAccount, uploadUserDate} from "../../redux/features/signInReducer";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const Profile = ( {token, userDate}) => {

  const dispatch = useDispatch()

  // const token = useSelector(state => state.signIn.token)
  //
  // const userDate = useSelector(state => state.signIn.userDate)

  const handleExit = () => {
    dispatch(exitInAccount())
  }
//asdadasd
  return (
      <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          aria-labelledby="offcanvasRightLabel"
          id="offcanvasRight"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Профиль</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="profile_user d-flex flex-column align-items-center">
            <div className="image_user">
              <img
                src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
                width="100px"
                alt=""
              />
            </div>
            <div className="personalData w-100">
              <div className="name_lastName d-flex flex-column mt-2">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">
                        <i className="bi bi-person-lines-fill"></i>
                      </th>
                      <th scope="col">Личные данные</th>
                      <th scope="col"> </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Фамилия: </th>
                      <td>{userDate.lastName}</td>
                    </tr>
                    <tr>
                      <th scope="row">Имя:</th>
                      <td>{userDate.firstName}</td>
                    </tr>
                    <tr>
                      <th scope="row">Телефон:</th>
                      <td colSpan="2">{userDate.phone}</td>
                    </tr>
                    <tr>
                      <th scope="row">Почта:</th>
                      <td colSpan="2">{userDate.mail}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="div d-flex justify-content-between">
                <NavLink
                  to="/pets/add"
                  className="btn btn-success btn-sm"
                  data-bs-dismiss="offcanvas"
                >
                  Добавить объявление
                </NavLink>
                <NavLink
                    to="/myPets/"
                    className="btn btn-success btn-sm"
                    data-bs-dismiss="offcanvas"
                >
                  Мои объявления
                </NavLink>
                <button
                  data-bs-dismiss="offcanvas"
                  onClick={handleExit}
                  className="btn btn-danger btn-sm"
                >
                  Выход
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Profile
