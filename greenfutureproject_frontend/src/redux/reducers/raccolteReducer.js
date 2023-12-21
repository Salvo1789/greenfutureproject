import { GET_RACCOLTE } from "../actions";

const initialState = {
    content: null
  };
  
  const raccolteReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_RACCOLTE:
        return {
          ...state,
          avaiable: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default raccolteReducer;