const initialState = {
  users: [],
  categories: [],
  pending: false
};

export const  categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "categories/load/pending":
      return {
        ...state, pending: true
      }

      case "categories/load/fulfilled":
      return {
        ...state, categories: action.payload, pending: false
      }
      case "users/load/fulfilled":
      return {
        ...state, users: action.payload, pending: false
      }
    default:
      return state;
  }
}

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch({type: "/categories/load/pending"})
    fetch("categories/")
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "categories/load/fulfilled", payload: data });
        });
  };
};
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({type: "load/pending"})
    fetch("/users")
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "users/load/fulfilled", payload: data });
        });
  };
};





