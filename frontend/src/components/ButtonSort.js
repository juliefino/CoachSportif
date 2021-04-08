import React from 'react';
import './ButtonSort.css';
import { Link } from 'react-router-dom';


class ButtonSort extends React.Component {
    constructor(props){
        super(props);
        this.state = {button_state : true};
        this.manageState = this.manageState.bind(this);
    }
    manageState() {
        this.setState(state => ({
            button_state: !state.button_state
        }))
    }

    render() {
        return (
            <div>
                <button className='btn' onClick={this.manageState}>
                    {this.state.button_state ? 'Trier par ordre croissant' : 'Trier par ordre décroissant'}
                </button>
             </div>
        );
    }
}

export default ButtonSort