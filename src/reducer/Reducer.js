export const initialReducerState = {
    cards: [],
    filterColor:"",
    fiterText:"",
  };
  
  export const reducerFunction = (state, action) => {
    switch (action.type) {
    case "ADD_CARD":
        return { ...state, cards: [...state.cards, action.payload] };
    case "FILTER_BY_COLOR":
        return {...state, filterColor : action.payload}  
    case "FILTER_BY_TEXT":
        return {...state, filterText: action.payload};
    case "CLEAR_FILTER":
        return {...state, filterColor:"", filterText:""}
    default:
        return state;
    }
  };
  