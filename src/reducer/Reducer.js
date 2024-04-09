export const initialReducerState = {
    cards: [],
    filterColor:"",
    fiterText:"",
    // filteredCards:[],
  };
  
  export const reducerFunction = (state, action) => {
    switch (action.type) {
    case "ADD_CARD":
        return { ...state, cards: [...state.cards, action.payload] };
    case "FILTER_BY_COLOR":
        return {...state, filterColor : action.payload}
        // const filteredCards = state?.cards?.filter((item) => item.color === action.payload)
        // return {...state, filteredCards: filteredCards};
    case "FILTER_BY_TEXT":
        return {...state, filterText: action.payload}
        // const filteredByTextCards = state?.cards?.filter((item) => item.title.includes(action.payload) || item.subtitle.includes(action.payload))
        // return {...state, filteredCards: filteredByTextCards};
    case "CLEAR_FILTER":
        return {...state, filterColor:"", filterText:""}
    default:
        return state;
    }
  };
  