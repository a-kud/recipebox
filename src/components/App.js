import React from "react";
import Accordion from "./Accordion";
// import AddButton from "./buttons/AddButton";
import AddModal from "./AddModal";

class RecipeBox extends React.Component {
    render() {
        return (
            <div>
                <div className="background"></div>
                <AddModal />

            </div>
        );
    };
}

export default RecipeBox;
