import { useEffect, useState } from "react";
import "./addCreativeForm.css";
import { useAppContext } from "../../contexts/appContext";



export const AddCreativeForm = ({isClose}) => {
  const { state, dispatch } = useAppContext();
  const initialData = {
    title: "",
    subtitle: "",
    color: ""
  };

  const [userInput, setUserInput] = useState(initialData);
//   const [cardData, setCardData] = useState({});
//   console.log("Card", cardData);

  const [colors, setColors] = useState({});

  const fetchColors = async () => {
    try {
      const res = await fetch(
        "https://random-flat-colors.vercel.app/api/random?count=5"
      );
      const data = await res.json();
      console.log(data);

      setColors(data);
      console.log(colors);
    } catch (error) {
      console.error("Error Fetching Colors");
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = () => {
    isClose()
    dispatch({ type: "ADD_CARD", payload: userInput });
    setUserInput(initialData);
  };

  useEffect(() => {
    fetchColors();
  }, [state]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h3>Add Creative</h3>
      <div>
        <label>
          Title :
          </label>
          <div className="add-input">
          <input
            name="title"
            type="text"
            placeholder="Enter Title..."
            value={userInput.title}
            onChange={changeHandler}
            required
          />
          </div>
        
      </div>
      <div>
        <label>
          Subtitle: 
          </label>


<div className="add-input">
<input
            name="subtitle"
            type="text"
            placeholder="Enter Subtitle..."
            value={userInput.subtitle}
            onChange={changeHandler}
            required
          />

</div>
       
      </div>
      <div className="color-grid">
        <label htmlFor="color-picker">Color:</label>
        {colors?.colors?.map((item, index) => (
          <div
            title="color"
            key={index}
            onClick={() => setUserInput({ ...userInput, color: item })}
            className={`color-picker ${
              userInput?.color === item ? "selected-color" : ""
            }`}
            style={{ backgroundColor: item }}
            role="button"
          >
            {/* {userInput?.color === item && <span>✔</span>} */}
          </div>
        ))}
      </div>

      {
        (userInput?.title && userInput?.subtitle && userInput.color) ?     
         <button className="btn" onClick={submitHandler}>Submit</button> :       
         <button className="btn" disabled onClick={submitHandler}>Done</button>
      }
    </form>
  );
};
