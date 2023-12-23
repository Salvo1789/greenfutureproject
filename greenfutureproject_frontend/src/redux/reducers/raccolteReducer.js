import { GET_RACCOLTE, CREATE_RACCOLTA, DELETE_RACCOLTA, DELETE_MATERIALE } from "../actions";

const initialState = {
  content: [],
};

const raccolteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RACCOLTE:
      return {
        ...state,
        content: action.payload,
      };
    case CREATE_RACCOLTA:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case DELETE_RACCOLTA:
      return {
        ...state,
        content: state.content.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default raccolteReducer;
