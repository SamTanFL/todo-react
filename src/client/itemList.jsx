import React, {Fragment} from 'react';
import { hot } from 'react-hot-loader';

import Item from './item';

class ItemList extends React.Component {

  render() {

    const itemComps = this.props.entries.map((entry, index) => {
        return <Item item={ entry } index= { index } remove={ this.props.remove } />
    })

    return (
      <ol className="itemList">
      <p>No. of Entries : {this.props.entries.length}</p>
            {itemComps}
      </ol>
    );
  }
}

export default hot(module)(ItemList);