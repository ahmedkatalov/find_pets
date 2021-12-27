import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <div className="container text-center my-5">
        <h2>Cтраница не найдена</h2>
        <NavLink to="/" className="btn btn-secondary my-2" type="button">
          Вернуться на главную
        </NavLink>
      </div>
    </div>
  )
}

export default ErrorPage
