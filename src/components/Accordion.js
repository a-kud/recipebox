import React from "react";

class Accordion extends React.Component {

    handleClick(e) {
        let panel = e.target.nextElementSibling;
        console.log(panel.scrollHeight);
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    render() {
        return (
            <div className="recipe_accordion">
                <button className="accordion" onClick={(e) => this.handleClick(e)}></button>
                <div className="panel">
                    <p className="recipe_ingredients">sdfdfsgsgfhjjk</p>
                </div>
            </div>
        );
    };
}

export default Accordion;
