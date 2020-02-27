import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            toDo: [],
            words: ""
        }
    }

    changeHandler(event) {
        this.setState({words:event.target.value})
    }

    clickHandler() {
        this.state.toDo.push(this.state.words)
        let list = this.state.toDo
        this.setState(
            {
                toDo: list,
                words:""
            }
        )
    }

  render() {
    let index = 0
    const doElements = this.state.toDo.map(listItem => {
        index++
        return <li key={index - 1}>{listItem}</li>
    })

    return (
      <div>
        <div className="item">
            <h1>{this.state.word}</h1>
            <input onChange={(event)=>{this.changeHandler(event);}} value={this.state.words} />
        </div>
        <button onClick={()=>{ this.clickHandler() }}>Add to To-Do List</button>
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
