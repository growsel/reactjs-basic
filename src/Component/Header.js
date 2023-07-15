import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    state = {
        name: 'Nguyen',
        age: 20,
    };
    handleClick = () => {
        alert('Click');
    }
    handleInputName = (event) => {
        this.setState({
            name: event.target.value,
        });
    }
    handleInputAge = (event) => {
        this.setState({
            age: event.target.value,
        });
    }
    render() {
        return (
            <>
                <button onClick={() => this.handleClick()} >NGUYEN</button>
                <input type="text" value={this.state.name} onChange={(event) => this.handleInputName(event)} id="inputText"></input>
                <input type="text" value={this.state.age} onChange={(event) => this.handleInputAge(event)} id="inputText"></input>
                <p className='name'>{this.state.name}</p>
                <p className='age'>{this.state.age}</p>
            </>

        );
    }
}

export default Header;