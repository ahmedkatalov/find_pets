
export const fetchPets = () => {
  return (dispatch) => {
    dispatch({ type: "pets/load/pending" });
    fetch("/pets")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "pets/load/fulfilled", payload: data });
      });
  };
};

export const uploadPets = (header, description, category, file) => {
  return (dispatch) => {
    dispatch({ type: "pets/load/pending" });
    const formData = new FormData();
    formData.append("img", file);
    formData.append("header", header);
    formData.append("description", description);
    formData.append("category", category);

    fetch("/pets/add", {
      method: "POST",
      headers: {
        // "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: formData
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
};

export const fetchContentPets = () => {
  return (dispatch) => {
    dispatch({type: 'pets/content/pending'})
    fetch('/pets/')
    .then(res => res.json())
    .then(data => {
      dispatch({type: 'content/pets/fulfilled', payload:data})
    })
  }
}

export const removeCardPet = (id) =>{
  return(dispatch) => {
    fetch(`/pets/remove/${id}`, {
      method: "DELETE"
    })
        .then((res) => res.json())
        .then((data) => {
          dispatch({type: "pets/remove/fulfilled", payload: id})
        })

  }
}
