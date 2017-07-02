import React from "react";
import Accordion from "./Accordion";
import AddRecipe from "./AddRecipe";

import {s4, guid} from "../helpers/guid";

class RecipeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            currentName: "",
            currentIngridients: ""
        };

        this.handleRecipeSubmit = this.handleRecipeSubmit.bind(this);
        this.handleRecipeDelete = this.handleRecipeDelete.bind(this);
        this.handleRecipeChange = this.handleRecipeChange.bind(this);
    }

    handleRecipeSubmit(e) {
        let recipes = this.state.recipes.slice();

        recipes.push({
            name: e.target[0].value,
            ingridients: e.target[1].value.split(","),
            id: guid(),
        });

        this.setState({recipes: recipes});

    }

    handleRecipeDelete(id) {

        let recipes = this.state.recipes.slice();
        let index = recipes.map( (recipe) => recipe.id ).indexOf(id);

        recipes.splice(index, 1);
        this.setState({recipes: recipes});

    }

    //propName - recipe name or ingridients
    // handleRecipeChange(propName,e) {
    //
    //     const { currentRecipe } = this.state;
    //     const updatedRecipe = {
    //         ...currentRecipe,
    //         [propName]: e.target.value
    //     };
    //     this.setState({currentRecipe: updatedRecipe});
    //
    // }
    handleRecipeChange = (propName) => (e) => {
        const { currentRecipe } = this.state;
        const updatedRecipe = {
            ...currentRecipe,
            [propName]: e.target.value
        };
        this.setState({currentRecipe: updatedRecipe});
    }


    render() {

        let recipes = this.state.recipes.slice(),
            recipesList = recipes.map((recipe) =>
                <Accordion
                    key={guid()}
                    id={recipe.id}
                    delete={this.handleRecipeDelete}
                    recipeName={recipe.name}
                    ingridients={recipe.ingridients} />
            );

        return (
            <div>
                <div className="background">
                    {recipesList}
                </div>
                <AddRecipe name={this.state.currentName}
                           ingridients={this.state.currentIngridients}
                           onRecipeSubmit={this.handleRecipeSubmit}
                           onRecipeChange={this.handleRecipeChange}
                           />
            </div>
        );
    };
}

export default RecipeBox;
