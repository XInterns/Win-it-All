import React, { Component } from 'react'
import ReactDOM from 'react-dom';


class SignIn extends Component {
    componentDidMount(){
        console.log(this);
        this.signInTarget = document.createElement('div');
        this.signInTarget.className = 'modal';
        document.body.appendChild('this.signInTarget');
        this._render();
    }

    _render(){

    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default SignIn
