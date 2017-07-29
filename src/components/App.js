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
            currentIngridients: "",
        };

        this.handleRecipeSubmit = this.handleRecipeSubmit.bind(this);
        this.handleRecipeDelete = this.handleRecipeDelete.bind(this);
        this.handleRecipeChange = this.handleRecipeChange.bind(this);

    }

    handleRecipeSubmit(...args) {
        let recipes = this.state.recipes.slice();
        if(args.length) {
            let id = args[0]; // recipe id
            let index = recipes.map( (recipe) => recipe.id ).indexOf(id); // find index of recipe by its id
            recipes[index].name = args[1].editedName; // args[1] - edited recipe data
            recipes[index].ingridients = args[1].editedIngridients.length == 1 ? args[1].editedIngridients : args[1].editedIngridients.split(",");
        } else {
            recipes.push({
                name: this.state.currentName,
                ingridients: this.state.currentIngridients.split(","),
                id: guid(),
            });
        }
        this.setState({
            recipes: recipes,
            currentName: "",
            currentIngridients: ""
        });
    }

    handleRecipeDelete(id) {

        let recipes = this.state.recipes.slice();
        let index = recipes.map( (recipe) => recipe.id ).indexOf(id); // find index of recipe by its id

        recipes.splice(index, 1);
        this.setState({recipes: recipes});

    }

    //propName - recipe name or ingridients
    handleRecipeChange(propName,e) {

        let value = e.target.value;

        this.setState({[propName]: value})
    }

    render() {

        let recipes = this.state.recipes.slice();
        let recipesList = recipes.map((recipe) =>
                <Accordion
                    key={guid()}
                    id={recipe.id}
                    delete={this.handleRecipeDelete}
                    recipeName={recipe.name}
                    ingridients={recipe.ingridients}
                    onRecipeSubmit={this.handleRecipeSubmit}
                    onRecipeChange={this.handleRecipeChange}
                     />
            );

        return (
            <div>
                <div className="background shadow-bottom">
                    {recipesList}
                </div>
                <AddRecipe actionTitle={"Add Recipe"}
                           action={"add"}
                           name={this.state.currentName}
                           ingridients={this.state.currentIngridients}
                           onRecipeSubmit={this.handleRecipeSubmit}
                           onRecipeChange={this.handleRecipeChange}
                           />
            </div>
        );
    };
}

export default RecipeBox;
