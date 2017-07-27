import React from "react";
import DeleteRecipe from "./DeleteRecipe";
import AddRecipe from "./AddRecipe";

import {s4, guid} from "../helpers/guid";

class Accordion extends React.Component {

    handleClick(e) {
        let panel = e.target.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }



    render() {
        let ingridients = this.props.ingridients.map( ingridient =>
            <p key={guid()}> {ingridient} </p>
        );

        return (
            <div className="recipe_accordion">
                <button className="accordion" onClick={(e) => this.handleClick(e)}>{this.props.recipeName}</button>
                <div className="panel">
                    <section className="recipe_ingredients">{ingridients}</section>
                    <DeleteRecipe id={this.props.id} delete={ (id) => this.props.delete(id) }/>
                    <AddRecipe  actionTitle={"Edit Recipe"}
                                action={"edit"}
                                id={this.props.id}
                                name={this.props.recipeName}
                                ingridients={this.props.ingridients}
                                editedName={this.props.editedName}
                                onRecipeChange={(name, e) => {
                                    //this.props.onEdit(name, e, this.props.id)
                                    this.props.onRecipeChange(name, e)
                                }}
                                onRecipeSubmit={(e) => this.props.onRecipeSubmit(e)}
                                />
                </div>
            </div>
            );
        };
}

export default Accordion;
