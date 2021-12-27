import './style.css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../../redux/features/signUpReducer'

const SignUp = () => {
  // const isFulfilled = useSelector((state) => state.signUp.isFulfilled)

  const error = useSelector((state) => state.signUp.error)

  const [newUser, setNewUser] = useState({
    pets: [],
    login: '',
    password: '',
    firstName: '',
    lastName: '',
    mail: '',
    phone: '',
  })

  const dispatch = useDispatch()

  // const navigate = useNavigate()

  // {isFulfilled && navigate('/login')}

  const handleNewUser = {
    login: (login) => {
      setNewUser({ ...newUser, login })
    },
    password: (password) => {
      setNewUser({ ...newUser, password })
    },
    firstName: (firstName) => {
      setNewUser({ ...newUser, firstName })
    },
    lastName: (lastName) => {
      setNewUser({ ...newUser, lastName })
    },
    mail: (mail) => {
      setNewUser({ ...newUser, mail })
    },
    phone: (phone) => {
      setNewUser({ ...newUser, phone })
    },
  }

  const handleSubmit = () => {
    dispatch(createUser(newUser))
    setNewUser({
      pets: [],
      login: '',
      password: '',
      firstName: '',
      lastName: '',
      mail: '',
      phone: '',
    })
    console.log(newUser)
  }
  return (
    <div className="container">
      <div className="registry shadow p-5 rounded-3 mt-5 w-50 m-auto">
        <form className="row g-3">
          <h3 className="col-12 text-center mb-3">Регистрация</h3>

          <div className="col-md-6">
            <label htmlFor="inputName" className="form-label">
              Имя
            </label>
            <input
              value={newUser.firstName}
              type="text"
              className="form-control"
              id="inputName"
              onChange={(e) => handleNewUser.firstName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputLastName" className="form-label">
              Фамилия
            </label>
            <input
              type="text"
              className="form-control"
              id="inputLastName"
              value={newUser.lastName}
              onChange={(e) => handleNewUser.lastName(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Email
            </label>
            <input
              value={newUser.mail}
              onChange={(e) => handleNewUser.mail(e.target.value)}
              type="email"
              className="form-control"
              id="inputAddress"
              placeholder=""
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputLogin" className="form-label">
              Логин
            </label>
            <input
              value={newUser.login}
              type="text"
              onChange={(e) => handleNewUser.login(e.target.value)}
              className="form-control"
              id="inputLogin"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword" className="form-label">
              Пароль
            </label>
            <input
              value={newUser.password}
              onChange={(e) => handleNewUser.password(e.target.value)}
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputNumber" className="form-label">
              Номер телефона
            </label>
            <input
              value={newUser.phone}
              onChange={(e) => handleNewUser.phone(e.target.value)}
              type="text"
              className="form-control"
              id="inputNumber"
              placeholder=""
            />
          </div>
          <div style={{ color: 'red' }}>{error}</div>
          <div className="col-12">
            <span
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Создать аккаунт
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
