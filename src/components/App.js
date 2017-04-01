import React from "react";
import Accordion from "./Accordion";
import AddButton from "./buttons/AddButton";

class RecipeBox extends React.Component {
    render() {
        return (
            <div>
                <div className="background"></div>
                <AddButton />
            </div>
        );
    };
}

export default RecipeBox;
