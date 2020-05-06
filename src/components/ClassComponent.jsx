// import React from "react";

// class ClassComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//     this.increase = this.increase.bind(this);
//   }

//   increase() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.increase}>+</button>
//       </div>
//     );
//   }
// }

import React from "react";

class ClassComponent extends React.Component{

  constructor(){
    super();
    this.state = {
      count: 0,
      count2: 99,
    };

    this.increase = this.increase.bind(this);
    this.increase2 = this.increase2.bind(this);
    this.total = this.total.bind(this);
  }
  increase() {
    this.setState({count:this.state.count +1});
  }
  increase2() {
    this.setState({count2:this.state.count2 +1});
  }

  total() {
    return this.state.count + this.state.count2;
  }
  render() {
      return (
      <div>
              <h1> {this.state.count} + {this.state.count2} = {this.total()}</h1>
              <button onClick={this.increase}> Add Count 1</button>
              <button onClick={this.increase2}>Add Count 2</button>
      </div> );
  }

}
export default ClassComponent;
