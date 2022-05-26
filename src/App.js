import React from 'react';
import image from "./img/beach.jpg"; 

class App extends React.Component {
  state = {
    curTime: ""
  };
 
  componentDidMount() {
    this.getTime();
  }
 
  getTime = () => {
    var today = new Date(),
    //curTime = today.toLocaleString('en-US', { hour: 'numeric', hour12: true }) + ':' + String(today.getMinutes()).padStart(2, '0') + ';'+((today.getHours % 12) || 12) + '....';
    curTime = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    this.setState({ curTime });
  };

  render(){
    return (
      <div style={{
            backgroundImage:`url(${image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh'}}
            className="App">
        <p>{this.state.curTime}</p>
      </div>
    );
  }
  // return (
  //   <div style={{
  //     backgroundImage:`url(${image})`,
  //     backgroundPosition: 'center',
  //     backgroundRepeat: 'no-repeat',
  //     backgroundSize: 'cover',
  //     width: '100vw',
  //     height: '100vh'}}>
  //   </div>
  // );
}

export default App;