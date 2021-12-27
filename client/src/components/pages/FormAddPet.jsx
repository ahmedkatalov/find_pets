import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { uploadPets } from "../../redux/features/petsReducer"

const FormAddPet = () => {
  const [header, setHeader] = useState(null)
  const [description, setDescription] = useState(null)
  const [category, setCategory] = useState(null)
  const [file, setFile] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const categories = useSelector((state) => state.categories.categories)

  const dispatch = useDispatch()

  const handleChangeHeader = (e) => {
    setHeader(e.target.value)
  }

  const handleChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleChangeImage = (e) => {
    setFile(e.target.files[0])
    const imageBox = document.querySelector(".imgBox")
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])

    reader.onload = () => {
      imageBox.src = reader.result
    }
  }

  const handleAddPet = () => {
    if (
      header === null ||
      description === null ||
      category === null ||
      file === null
    ) {
      setErrorMessage("*Пожалуйста заполните все поля")
    } else {
      dispatch(uploadPets(header, description, category, file))
    }
  }

  const handleReset = () => {
    const imageBox = document.querySelector(".imgBox")
    document.getElementById("myform").reset()
    setHeader(null)
    setDescription("")
    setCategory(null)
    setErrorMessage(null)
    imageBox.src = ""
  }

  return (
    <div>
      <div className="container">
        <div>
          <h1 className="text-center">Форма объявления</h1>
        </div>
        <form id="myform">
          <div className="row mt-5 container justify-content-center">
            <div className="col-4">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control d-block w-100"
                  id="floatingPassword"
                  placeholder="petName"
                  onChange={handleChangeHeader}
                  value={header}
                  name="header"
                />
                <label htmlFor="floatingPassword">Заголовок</label>
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control d-block mt-5 mb-5 w-100"
                  placeholder="petDesc"
                  id="floatingTextarea"
                  onChange={handleChangeDescription}
                  value={description}
                  name="description"
                />
                <label htmlFor="floatingTextarea">Описание питомца</label>
              </div>
              <div className="mb-5">
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  accept="image/*"
                  onChange={handleChangeImage}
                  name="img"
                />
              </div>

              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  name="category"
                >
                  {`Категория:  `}
                  {categories.map((cat) => {
                    if (cat._id === category) {
                      return cat.name
                    }
                    return null
                  })}
                </button>
                <ul
                  className="dropdown-menu text-center"
                  aria-labelledby="dropdownMenuButton1"
                >
                  {categories.map((category) => (
                    <li>
                      <span
                        type="button"
                        className="dropdown-item text-start"
                        onClick={() => setCategory(category._id)}
                      >
                        {category.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-4">
              <img width={510} className="imgBox" src="" alt="" />
            </div>
          </div>
        </form>
        <div className="text-end mt-5 text-center">
          <div className="text-danger">{errorMessage}</div>
          <span
            className="btn btn-primary"
            onClick={handleAddPet}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Добавить
          </span>
        </div>
      </div>

      {header !== null &&
        description !== null &&
        category !== null &&
        file !== null && (
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content align-items-center">
                <div className="modal-header">
                  <h2
                    className="modal-title text-success"
                    id="exampleModalLabel"
                  >
                    Добавлено
                  </h2>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={handleReset}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default FormAddPet
