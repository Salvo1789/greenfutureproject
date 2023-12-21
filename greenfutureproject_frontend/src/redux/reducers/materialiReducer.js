import { GET_MATERIALI } from "../actions";

const initialState = {
    content: null
  };
  
  const materialiReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MATERIALI:
        return {
          ...state,
          avaiable: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default materialiReducer;