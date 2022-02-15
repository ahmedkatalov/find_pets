import useInitialState from "./useInitialState"

export const auth = (userDate) => {
  return (dispatch) => {
    dispatch({ type: 'signInReducer/signIn/pending' })
    fetch('/users/login', {
      method: 'POST',
      body: JSON.stringify(userDate),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.error) {
          dispatch({ type: 'signInReducer/signIn/rejected', error: data.error })
        } else {
          dispatch({ type: 'signInReducer/signIn/fulfilled', payload: data })
          localStorage.setItem('token', data)

          fetch('/users/profile', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
              .then((res) => res.json())
              .then((data) => {

                if (data.error) {
                  dispatch({ type: 'signInReducer/signIn/rejected' })
                } else {
                  dispatch({ type: 'signInReducer/userDate/fulfilled', payload: data })
                }
              })
        }
      })
  }
}

export const exitInAccount = () => {
  return (dispatch) => {
    localStorage.removeItem('token')
    dispatch({ type: 'singInReducer/singOut/fulfilled' })
    useInitialState().userDate = {}
  }
}
