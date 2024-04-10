import { useAppContext } from "../../contexts/appContext";
import "./progressBar.css"

export const ProgressBar = () => {

    const {state} = useAppContext()

    const cards = state?.cards || []


    const calculateProgressBarWidth = (cards) => {

        console.log("cards", cards)
        let width = 0;
        
        for(let i =0 ; i < cards?.length; i++){
            width = width + 20;
        }

        return width;
    }

    return(
        <div className="progress-section">
               <div className="progress-bar">
            <div className="progress" style={{width:`${calculateProgressBarWidth(cards)}%`}}>
            </div>
        </div>


<div className="progress-length">
                <p className="p-length">{`${cards?.length}/5 Creatives`} </p>   
            </div>


        </div>
     
    )
}