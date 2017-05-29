import React from "react";

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
        return (
            <div className="recipe_accordion">
                <button className="accordion" onClick={(e) => this.handleClick(e)}>{this.props.recipeName}</button>
                <div className="panel">
                    <p className="recipe_ingredients"></p>
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        );
    };
}

export default Accordion;
