import React from 'react'
import {render} from 'react-dom'

class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                Hello my diar friends {this.props.name}
            </div>
        );
    }
}