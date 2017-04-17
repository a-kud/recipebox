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
            recipeSubmitted: false,
        };

        this.handleRecipeChange = this.handleRecipeChange.bind(this);
        this.handleRecipeSubmit = this.handleRecipeSubmit.bind(this);
    }

    handleRecipeChange(e) {
        const name = this.state.recipe.name,
              ingridients = this.state.recipe.ingridients;
        if (e.target.id == "recipe_name") {
            this.setState({name: e.target.value});
        } else {
            this.setState({ingridients: e.target.value.split(",")});
        }

    }

    handleRecipeSubmit(e) {
        console.log(this.state)
        const submitted = this.state.recipeSubmitted;
        this.setState({recipeSubmitted: !submitted});
    }

    render() {
        const name = this.state.recipe.name,
              ingridients = this.state.recipe.ingridients,
              recipe = this.state.recipe;

        return (
            <div>
                <div className="background">
                    <Accordion recipeName={name}
                               recipeIngredients={ingridients} />
                </div>
                <Modal recipe={recipe} onRecipeSubmit={this.handleRecipeSubmit}
                                    onRecipeChange={this.handleRecipeChange}/>

            </div>
        );
    };
}

export default RecipeBox;
