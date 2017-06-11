import React from "react";

class DeleteRecipe extends React.Component {

    handleClick() {
        console.warn("foo")
    }

    render() {
        return <button onClick={this.handleClick()}>Delete</button>
    }
}
