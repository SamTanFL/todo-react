import React, {Fragment} from 'react';
import { hot } from 'react-hot-loader';

class Form extends React.Component {

    constructor(){
        super();
        this.state = {
            input: "",
            error: ""
        }
    }

    changeHandler(input) {
        this.setState( { input } )
        if (this.state.input.length >= 200) {
            this.setState( { error: "Over 200 Characters" } )
        } else {
            this.setState( { error: "" } )
        }
    }

    clickAdd() {
        if (this.state.input.length <= 200 && this.state.input.length >= 1) {
            this.props.callback(this.state.input)
            this.setState( { input:"", error: "" } )
        } else {
            if (this.state.input.length <= 0) {
                this.setState( { error: "No Input" } )
            } else if (this.state.input.length >= 200) {
                this.setState( { error: "Entry Too Long" } )
            }
        }
    }

  render() {

    return (
        <div className="form">
            <input onChange={(event)=>{this.changeHandler(event.target.value);}} value={this.state.input} maxLength={201} />
            <button onClick={()=>{ this.clickAdd() }}>Add</button>
            <p><small className="error">{this.state.error}</small></p>
        </div>
    );
  }
}

export default hot(module)(Form);