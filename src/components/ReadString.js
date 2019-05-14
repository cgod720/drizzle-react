import React, { Component } from 'react';

class ReadString extends Component {
  state = {
    dataKey: null
  }
  componentDidMount(){
    const { drizzle, drizzleState } = this.props;
    console.log(drizzle);
    const contract = drizzle.contracts.MyStringStore;
    console.log(drizzleState);

    const dataKey = contract.methods["myString"].cacheCall();
    this.setState({ dataKey })
  }
  render(){
    const { MyStringStore } = this.props.drizzleState.contracts;
    const myString = MyStringStore.myString[this.state.dataKey]
    return(
      <p>My stored string: {myString && myString.value}</p>
    )
  }
}

export default ReadString;
