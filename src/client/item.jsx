import React, {Fragment} from 'react';
import { hot } from 'react-hot-loader';

class Item extends React.Component {

    render() {

        return (
            <li key={this.props.index} className="item">
                {this.props.item}
                <button onClick={ ()=>this.props.remove(this.props.index) } >Remove</button>
            </li>
        );
    }
}

export default hot(module)(Item);