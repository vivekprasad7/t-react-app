import { useState } from "react";
import { useAppContext } from "../contexts/appContext";
import { AddCreativeForm } from "../components/addCreativeForm/addCreativeForm.jsx";
import { Card } from "../components/card/Card.jsx";
import "./Home.css"
import { Filter } from "../components/filter/Filter";
import { Close } from "@mui/icons-material";


export const Home = () => {
    const { state, dispatch, newCards, getFilteredCards } = useAppContext();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isDrawerOpen = () => setDrawerOpen(true);
    const isDrawerClose = () => setDrawerOpen(false);

    const clearFilter = () => {
        dispatch({ type: "CLEAR_FILTER" })
    }

    return (
        <>
            <div style={{ width: !drawerOpen ? "100%" : "65%" }} >



                <div className="clear">
                    <Filter />

                </div>

                <div className="clear-filter">
                    <button className="btn" onClick={clearFilter}>Clear Filter</button>
                    {
                        drawerOpen ? 
                        <button className="add-btn"  disabled onClick={isDrawerOpen}>Add Creative</button> : 
                        <button className="add-btn"  onClick={isDrawerOpen}>Add Creative</button>
                    }                </div>

            


                <div className="scrollbox">
                    <div className="scrollbox-inner">

                        {newCards && newCards?.length > 0 ? (
                            newCards.map((item, index) => <Card key={index} info={item} />)
                        ) : (
                            state?.cards?.map((item, index) => <Card key={index} info={item} />)
                        )}

                    </div>

                    <div className="add-btn-container" >
                    {
                        drawerOpen ? 
                        <button className="add-btn"  disabled onClick={isDrawerOpen}>Add Creative</button> : 
                        <button className="add-btn"  onClick={isDrawerOpen}>Add Creative</button>
                    }
                </div>

                </div>

            </div>
            <div className="right-drawer" style={{
                width: drawerOpen ? "35%" : "0%",
                position: "fixed",
                top: "0%",
                right: "0%",
                maxHeight: "100vh",
                bgcolor: "background.paper",
                boxShadow: drawerOpen ? "1px 0px 5px 2px rgba(0, 0, 0, 0.1)" : "none" 
                //   bordermaxH "2px solid #000",

            }} >

{
                        drawerOpen ? 
                        <Close onClick={isDrawerClose} className="drawer-close-icon"/>
                        : 
                        ""
                    }
                {/* <Close onClick={isDrawerClose} className="drawer-close-icon"/> */}
                <AddCreativeForm isClose={isDrawerClose} />
            </div>
        </>
    );
};
