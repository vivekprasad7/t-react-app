import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState
  } from "react";
  import { initialReducerState, reducerFunction } from "../reducer/Reducer";
  
  const AppContext = createContext();
  
  export const AppContextProvider = ({ children }) => {
    const [colors, setColors] = useState([]);
  
    const [state, dispatch] = useReducer(reducerFunction, initialReducerState);
  
    const fetchColors = async () => {
      try {
        const res = fetch(
          "https://random-flat-colors.vercel.app/api/random?count=5"
        );
        console.log(res.json);
      } catch (error) {
        console.error("Error Fetching Colors");
      }
    };
  


    // const getFilteredCards = () => {
    //     let filteredCards = state?.cards;

    //     if(state?.filterColor?.length > 0){
    //         filteredCards = filteredCards?.filter((item) => item?.color === state?.filterColor)
    //     }

    //     if(state?.filterText?.length > 0){
    //         filteredCards = filteredCards?.filter((item) => item?.title?.toLowerCase().includes(state?.filterText.toLowerCase()) ||  item?.subtitle?.toLowerCase().includes(state?.filterText.toLowerCase())
    //         )
    //     }

    //     return filteredCards;

    // }

    const getFilteredCards = () => {
        let filteredCards = state?.cards;
    
        // Apply filter by color
        if(state?.filterColor?.length > 0){
            filteredCards = filteredCards?.filter((item) => item?.color === state?.filterColor)
        }
    
        // Apply filter by text (case insensitive and partial match)
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
  