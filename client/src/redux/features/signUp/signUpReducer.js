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
