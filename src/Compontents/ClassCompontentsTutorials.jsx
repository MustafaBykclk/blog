// rcc

// Component
import { Component } from "react";

class ClassCompontentsTutorials extends Component {

// Constructor
constructor (props) {
    super(props);

    // state
    this.state={
        count:0
    }

    this.countPlusHandleClick= this.countPlusHandleClick.bind(this);
    this.countMinusHandleClick= this.countMinusHandleClick.bind(this);

} // end constructor

// cdm

// event 1
countPlusHandleClick(){
    this.setState({count:this.state.count+1});
} // end event

// event 2
countMinusHandleClick(){
    this.setState({count:this.state.count-1});
} // end event

render(){
    return(
        <div>
            <h1> Sayım </h1>
            <p> Say: {this.state.count} </p>
            <button className="btn btn-primary" onClick={this.countPlusHandleClick}>+</button>
            <button className="btn btn-danger ms-2" onClick={this.countMinusHandleClick}>-</button>

        </div>
    );
}

}//end ClassCompontentsTutorials

export default ClassCompontentsTutorials;