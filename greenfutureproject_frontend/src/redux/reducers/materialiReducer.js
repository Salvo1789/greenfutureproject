import { GET_MATERIALI, CREATE_MATERIALE, DELETE_MATERIALE } from "../actions";

const initialState = {
    content: []
  };
  
  const materialiReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MATERIALI:
        return {
          ...state,
          content: action.payload,
        };
        case CREATE_MATERIALE:
          return {
            ...state,
            content: [...state.content, action.payload]
          };
          case DELETE_MATERIALE:
            return {
              ...state,
              content: state.content.content.filter((mat) => mat.nome !== action.payload),
            };
      default:
        return state;
    }
  };
  
  export default materialiReducer;