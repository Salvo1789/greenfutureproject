import { CREATE_MATERIALE, DELETE_MATERIALE } from "../actions";

const initialState = {
  content: [],
};

const materialeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MATERIALE:
      return {
        ...state,
        content: [...state.content, action.payload]
      };
    case DELETE_MATERIALE:
      return {
        ...state,
        content: state.content.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default materialeReducer;