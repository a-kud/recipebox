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
        // this.handleEdit = this.handleEdit.bind(this);

    }

    handleRecipeSubmit(e) {
        let recipes = this.state.recipes.slice();

        recipes.push({
            name: e.target[0].value,
            ingridients: e.target[1].value.split(","),
            id: guid(),
        });

        this.setState({
            recipes: recipes,
            currentName: "",
            currentIngridients: ""
        });

    }

    handleRecipeDelete(id) {

        let recipes = this.state.recipes.slice();
        let index = recipes.map( (recipe) => recipe.id ).indexOf(id);

        recipes.splice(index, 1);
        this.setState({recipes: recipes});

    }

    //propName - recipe name or ingridients
    handleRecipeChange(propName,e) {

        let value = e.target.value;

        this.setState({[propName]: value})
    }

    // handleEdit(propName, e, id) {
    //     let value = e.target.value;
    //     let recipes = this.state.recipes.slice();
    //     let index = recipes.map( (recipe) => recipe.id ).indexOf(id);
    //     // let name = recipes[index].name
    //
    //     if (propName == "currentName") {
    //         recipes[index].name = value;
    //     } else {
    //         recipes[index].ingridients = value.split(",");
    //     }
    //
    //
    //     this.setState({
    //         [propName]: value,
    //         recipes: recipes
    //     })

    // }

    render() {

        let recipes = this.state.recipes.slice();
        let recipesList = recipes.map((recipe) =>
                <Accordion
                    key={guid()}
                    id={recipe.id}
                    delete={this.handleRecipeDelete}
                    recipeName={recipe.name}
                    ingridients={recipe.ingridients}
                    onEdit={this.handleEdit}
                    name={this.state.currentName}
                    onRecipeSubmit={this.handleRecipeSubmit}
                    onRecipeChange={this.handleRecipeChange}
                     />
            );

        return (
            <div>
                <div className="background">
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
