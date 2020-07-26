import React from 'react';
import './ConventionsItem.css';


class ConventionsItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          date: "",
          website: null,
          name: "Null",
          timeLeft: ""
      };

      //allows 'this' to refer to the current conventionitem
      this.updateTimeLeft = this.updateTimeLeft.bind(this);

      //registers our 'updateTimeLeft' function with the upper App instance so that the timer will call it.
      this.props.registerForAppTick(this.props.convention.name, this.updateTimeLeft);
    }

    updateTimeLeft() {
        //this function updates the display (how much time is left)
        if (this.state != null) {
            var dateStr = this.state.date;
            var date = new Date(dateStr);
            var now = new Date();
            var timeDiffMs = date - now;
            var diffObj = this.convertMillisecondsToTimeSpan(timeDiffMs);

            var diffStr = diffObj["days"] + " days, " + diffObj["hours"] + " hours, " + diffObj["minutes"] + " minutes, " + diffObj["seconds"] + " seconds.";
            this.setState({timeLeft: diffStr});
        }
    }

    convertMillisecondsToTimeSpan(milliseconds) {
        //based on code from: https://stackoverflow.com/a/14297656
        var diff = milliseconds;

        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -=  days * (1000 * 60 * 60 * 24);

        var hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);

        var mins = Math.floor(diff / (1000 * 60));
        diff -= mins * (1000 * 60);

        var seconds = Math.floor(diff / (1000));
        diff -= seconds * (1000);

        return { "days" : days, "hours": hours, "minutes": mins, "seconds": seconds };
    }

    componentDidMount(props) {
        this.setState({
            date: this.props.convention.date,
            website: this.props.convention.website,
            name: this.props.convention.name,
            dateConfirmed: this.props.convention.confirmed,
            timeLeft: ""
        })
    }

    render(props) {
        return (
            <div convention-date={this.props.convention.date} class="convention-item">
                <h3 class="convention-header"><a href={this.props.convention.website}>{this.props.convention.name}</a></h3>
                <p class="convention-timeleft">{this.state.timeLeft}</p>

                { this.props.convention.confirmed == "false" && 
                    <span>The date of this convention hasn't been confirmed.</span>
                }
            </div>
        );
    }
}

export default ConventionsItem;
