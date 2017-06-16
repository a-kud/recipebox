import React from "react";

class DeleteRecipe extends React.Component {

    handleClick() {
        this.props.delete(this.props.id);
    }

    render() {
        return <button onClick={() => this.handleClick()}>Delete</button>
    }
}

export default DeleteRecipe;
