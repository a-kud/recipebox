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
            <div>
                <button className="accordion" onClick={(e) => this.handleClick(e)}></button>
                <div className="panel">
                    <p>sdfdfsgsgfhjjk</p>
                </div>
            </div>
        );
    };
}

export default Accordion;
