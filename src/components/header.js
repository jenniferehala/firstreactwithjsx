import React, {Component} from "react"

class Header extends Component {
        render() {
            return (
                <div>
                    // By inheriting from React.Component all we need is the "this" keyword in front of props.
                    <h1>My name is { this.props.firstName } { this.props.lastName }</h1>
                </div>
            );
        }
    }
    
    