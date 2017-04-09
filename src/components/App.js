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

        this.handleRecipeChange = this.handleRecipeChange.bind(this);
    }

    handleRecipeChange(e) {
        const name = this.state.recipe.name;
        this.setState({name: e});
    }

    render() {
        const recipe = this.state.recipe;
        return (
            <div>
                <div className="background"></div>
                <Modal recipe={recipe} onRecipeChange={this.handleRecipeChange}/>

            </div>
        );
    };
}

export default RecipeBox;
