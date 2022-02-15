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
