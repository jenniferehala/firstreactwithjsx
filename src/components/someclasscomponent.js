import React, { Component } from 'react';


class SomeClassComponent extends Component {
    render() {
        return <div>
                    <div>
                        ===============================
                    </div>
                    <div>
                        This is from our some class component.
                    </div>
                    
                    <p>Text:{this.props.someText}</p>
                    <p>First Name:{this.props.firstName}</p>
                    <p>Last Name:{this.props.lastName}</p> 
                    <p>Age:{this.props.someNumber}</p> 
        </div>
    }
}

export default SomeClassComponent;
