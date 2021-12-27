const initialState = {
  signingUp: false,
  error: null,
  isFulfilled: false
}


export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "signUpReducer/signup/pending":
      return {
        ...state, signingUp: true, error: null
      }
      case "signUpReducer/signup/fulfilled":
      return {
        ...state, signingUp: false, error: false, isFulfilled: false
      }
    case "signUpReducer/isFulfilled/fulfilled":
      return {
        ...state, isFulfilled: true
      }
      case "signUpReducer/signup/rejected":
      return {
        ...state, signingUp: false, error: action.error
      }
    default:
      return state
  }
}

export const createUser = (userDate) => {
  return(dispatch) => {
    dispatch({type: "signUpReducer/signup/pending"})
    fetch("/users/add", {
      method: "POST",
      body: JSON.stringify(userDate),
      headers: {
        "Content-type": "application/json"
      }
    })
        .then((res)=> res.json())
        .then((data) => {
          if (data.error){
            dispatch({type: "signUpReducer/signup/rejected", error: data.error} )
          }else {
            dispatch({type: "signUpReducer/isFulfilled/fulfilled"})
            dispatch({type: "signUpReducer/signup/fulfilled", payload: data})
          }
        })

  }

}