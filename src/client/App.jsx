import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            toDo: [],
            words: "",
            error: ""
        }
    }

    changeHandler(event) {
        if (this.state.words.length > 200) {
            this.setState({error: "TYPING TOO MUCH DUDE!!!!!!"})
        } else {
            this.setState({error: ""})
        }
        this.setState({words:event.target.value})

    }

    clickAdd() {
        if (this.state.words.length <= 200 && this.state.words.length >= 1) {
            this.state.toDo.push(this.state.words)
            let list = this.state.toDo
            this.setState(
                {
                    toDo: list,
                    words:""
                }
            )
        } else {
            if (this.state.words.length < 1) {
                this.setState({error: "TOO SHORT SHORTY"})
            } else if (this.state.words.length > 200) {
                this.setState({error: "TOO LONG WINDED DUDE"})
            }
        }
    }

    clickRemove(index) {
        this.state.toDo.splice(index, 1)
        let list = this.state.toDo
        this.setState({toDo: list})
    }

  render() {
    const doElements = this.state.toDo.map((listItem, index) => {
        return (
            <div>
                <li key={index}>{listItem}</li>
                <button onClick={()=>{ this.clickRemove(index) }}>Remove from List</button>
            </div>
            );
    })

    return (
      <div>
        <div className="item">
            <h1>{this.state.word}</h1>
            <input onChange={(event)=>{this.changeHandler(event);}} value={this.state.words} />
            <small>{this.state.error}</small>
        </div>
        <button onClick={()=>{ this.clickAdd() }}>Add to To-Do List</button>
        <div className="todo">
            <ol>
                {doElements}
            </ol>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
