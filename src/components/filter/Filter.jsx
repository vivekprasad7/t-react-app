import { useState } from "react"
import { useAppContext } from "../../contexts/appContext"
import "./Filter.css"

export const Filter = () => {
    const { state, dispatch} = useAppContext()
    const [ searchInput, setSearchInput] = useState("")

    const tempColors = [
        "#FF5733", 
        "#2E86C1", 
        "#4CAF50", 
        "#FFC300", 
        "#9B59B6"  
      ];
      

    console.log("state-filter", state)

    const changeHandler = (e) => {
        setSearchInput(e.target.value)
        console.log("search-input", searchInput)
        dispatch({type:"FILTER_BY_TEXT", payload: searchInput})
    }

    return(
        <>
        <div className="filter-title-box">

                    <h3 className="filter-title">Filter By: </h3>
        </div>

     
        <div className="filter-box">
            <div className="color-box">

                <div>

                <label htmlFor="">
                    color:
                </label>
                </div>

<div>
{ state.cards && state.cards.length > 0 ? 
                    
                    state?.cards?.map((item, index) => (
          <div
            title="color"
            key={index + item}
            className="color-picker"
            onClick={() => dispatch({type:"FILTER_BY_COLOR", payload: item?.color})}
            style={{ backgroundColor: item?.color }}
            role="button"
          >
            {/* {userInput?.color === item && <span>✔</span>} */}
          </div>
        ))  :  tempColors.map((item, index) => <div 
        key={index}
        className="temp-color-picker"        
        style={{ backgroundColor: item }}
        >
            {/* hio */}
        </div>)
    }
</div>
                   
            </div>
           
        <div className="title-box">

            <div>
            <label>
            title/subtitle:
            </label>
         
            </div>

<div className="filter-input">
<input 
            type="text" 
            name="searchInput"
            placeholder="Search Across Title and Subtitle.."
            value={searchInput}
            onChange={changeHandler}
            />
</div>
          
        </div>
        </div>
        </>
    )
}