import {
    createContext,
    useContext,
    useReducer,
  } from "react";
  import { initialReducerState, reducerFunction } from "../reducer/Reducer";
  
  const AppContext = createContext();
  
  export const AppContextProvider = ({ children }) => {
  
    const [state, dispatch] = useReducer(reducerFunction, initialReducerState);
  

    const getFilteredCards = () => {
        let filteredCards = state?.cards;
    
        if(state?.filterColor?.length > 0){
            filteredCards = filteredCards?.filter((item) => item?.color === state?.filterColor)
        }
    
        if(state?.filterText?.length > 0){
            const searchText = state?.filterText.toLowerCase();
            filteredCards = filteredCards?.filter((item) => 
                item?.title.toLowerCase().includes(searchText) ||  
                item?.subtitle.toLowerCase().includes(searchText)
            )
        }
    
        return filteredCards;
    }
    

    let newCards = getFilteredCards()
  
    return (
      <AppContext.Provider value={{ state, dispatch, newCards, getFilteredCards }}>
        {children}
      </AppContext.Provider>
    );
  };
  
  export const useAppContext = () => useContext(AppContext);
  