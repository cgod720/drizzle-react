import React, { Component } from 'react';
import './App.css';
import ReadString from "./components/ReadString"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      drizzleState: null
    }
  }

  componentDidMount(){
    const { drizzle } = this.props;

    //subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {

      //every time store updates, get state from drizzle
      const drizzleState = drizzle.store.getState();

      //check to see if it's ready. If so, update local component state
      if(drizzleState.drizzleStatus){
        this.setState({ loading: false, drizzleState })
      }

    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render() {
    if (this.state.loading) return "Loading Drizzle...";
    return(
      <div className="App">
        <ReadString
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
      </div>
    )
  }
}

export default App;
