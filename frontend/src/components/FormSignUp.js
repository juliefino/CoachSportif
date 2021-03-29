import React, { Component, Link } from 'react';
import './Form.css';

const initialState_user = {
    alias : "",
    email : "",
    naissance: "",
    taille: "",
    poids: '',
    password: ""

}
class FormSignup extends Component{
    constructor(props){
        super(props);

        this.state = initialState_user;
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

   render() {
       return (

            <div className='form-content'>
                <form className="form">
                    <div className="form-inputs">
                    <label className='form-label'>ALIAS</label>
                      <input
                        className='form-input'
                        type='text'
                        name='alias'
                        placeholder='Entrez votre alias'
                        value={this.state.alias}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className='form-inputs'>
                      <label className='form-label'>EMAIL</label>
                      <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Entrez votre e-mail'
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                      </div>
                    <div className='form-inputs'>
                      <label className='form-label'>Naissance</label>
                      <input
                        className='form-input'
                        type='date'
                        name='naissance'
                        value={this.state.naissance}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-inputs">
                    <label className='form-label'>Taille</label>
                      <input
                        className='form-input'
                        type='number'
                        name='alias'
                        placeholder='Entrez votre taille'
                        value={this.state.taille}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-inputs">
                    <label className='form-label'>POIDS</label>
                      <input
                        className='form-input'
                        type='number'
                        name='alias'
                        placeholder='Entrez votre poids'
                        value={this.state.poids}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className='form-inputs'>
                      <label className='form-label'>MOT DE PASSE</label>
                      <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Entrez mot de passe'
                        value={this.state.password}
                        onChange={this.handleChange}
                        />
                    </div>

                    <button type="submit" className='form-input-btn'>S'INSCRIRE</button>
                </form>

            </div>
   );

   }
}

export default FormSignup;