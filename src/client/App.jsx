import React, {Fragment} from 'react';
import { hot } from 'react-hot-loader';

import Form from './form';
import ItemList from './itemList';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            entries: [],
            archive: []
        }
    }

    removeData(index) {
        this.state.entries.splice(index, 1)
        const entries = this.state.entries
        this.setState( { entries } )
    }

    addData(data) {
        let entry = data
        const entries = [ entry, ...this.state.entries ]
        this.setState( { entries } )
    }


    render() {

        const formCallback = (data)=>{ this.addData(data) }

        const deleteCallback = (index)=>{ this.removeData(index) }

    return (
            <div className="container">
                <Form callback={formCallback} />
                <ItemList entries={this.state.entries} remove={deleteCallback} />
            </div>
        );
    }
}

export default hot(module)(App);
