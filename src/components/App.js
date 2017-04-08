import React from "react";
import Accordion from "./Accordion";
import Modal from "./Modal";

class RecipeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: {
                name: "",
                ingridients: [],
            },
        };
    }
    render() {
        const recipe = this.state.recipe;
        return (
            <div>
                <div className="background"></div>
                <Modal recipe={recipe}/>

            </div>
        );
    };
}

export default RecipeBox;
