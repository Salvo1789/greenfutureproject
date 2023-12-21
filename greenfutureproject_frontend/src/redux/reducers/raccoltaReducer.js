import { CREATE_RACCOLTA, DELETE_RACCOLTA } from "../actions";

const initialState = {
  content: [],
};

const raccoltaReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RACCOLTA:
      return {
        ...state,
        content: [...state.content, action.payload]
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

export default raccoltaReducer;
