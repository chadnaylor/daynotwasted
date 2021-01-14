import React from 'react';
import fire from '../fire'
import styled from 'styled-components'
import '../App.css'

const styledLabels = styled.label`
    width: 150;
    display: inline-block;
    padding-right: 15px;
    align-text: right;
`


class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            displayName: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.signIn = this.signIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.signOut = this.signOut.bind(this);
    }



    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    signIn() {
        //console.sign(this.state)
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(() => {
                alert("wrong Creds.")
            })

    }

    signUp() {
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)

            .then(() => {
                alert("you have been sign up")
            })
            .catch(() => {
                alert("something went wrong")
            })

        this.forceUpdate()
    }

    signOut() {
        fire.auth().signOut()
        this.forceUpdate();
    }

    render() {
        return (
            <div className='Auth'>
                <input className='inputEmail' name='email' placeholder='Email' onChange={e => this.handleChange(e)} />
                <div />
                <input className='inputPassword' name='password' placeholder='Password' type='password' onChange={(e) => this.handleChange(e)} />
                <br />
                <br />
                <button className='signInButton' name="signIn" onClick={this.signIn}>Sign In</button>
                <br />
                <button className='signUpButton' name='signUp' onClick={this.signUp}>Sign Up</button>
                {/* <button className='signOutButton' name='signOut' onClick={this.signOut}>Sign out</button> */}

            </div>
        )
    }
}


export default Signin;