const initialState = {
  pets: [],
  pending: false,
};

export const petsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "pets/load/pending":
      return {
        ...state,
        pending: true,
      };

    case "pets/load/fulfilled":
      return {
        ...state,
        pets: action.payload,
        pending: false,
      };

    case "pets/content/pending" :
      return {
        ...state,
        pending: false
      }

    case "content/pets/fulfilled":
      return {
        ...state,
        pets: action.payload,
        pending: false
      }
    case "pets/remove/fulfilled":
      return {
        ...state,
        pets: state.pets.filter((pet) => pet._id !== action.payload)
      }
    default:
      return state;
  }
};
