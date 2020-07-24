import React from 'react';
import './ConventionsGrid.css';
import ConventionItem from "./ConventionItem.js";

//this is the grid that holds the convention blocks (convention item).

class ConventionsGrid extends React.Component {
    constructor(props) {
      super(props);
    }

    render(props) {
        if (this.props.conventions == null) {
            return (
                <p>There aren't any conventions available at this time.</p>
            );
        } else {
            return (
                <div class="conventions-grid">
                    { this.props.conventions.map((element, index) => {
                    return <ConventionItem convention={element} registerForAppTick={this.props.apptick} />
                    })}
                </div>
            );
        }
        
    }
}

export default ConventionsGrid;
