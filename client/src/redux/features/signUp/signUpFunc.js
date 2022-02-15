
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