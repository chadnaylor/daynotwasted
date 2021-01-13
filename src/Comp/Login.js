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


class Login extends React.Component {
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
        //console.log(this.state)
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                this.props.setUser("a user")
                alert("user: " + JSON.stringify(user))

            }).catch((e) => {
                alert(e)
            }).catch(() => {
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
            <>
                <styledLabels className='email'> email: </styledLabels>
                <input className='inputEmail' name='email' onChange={e => this.handleChange(e)} />
                <div />
                <styledLabels className='password'>password: </styledLabels>
                <input className='inputPassword' name='password' type='password' onChange={(e) => this.handleChange(e)} />
                <br />
                <br />
                <button className='signInButton' name="signIn" onClick={this.signIn}>Sign In</button>
                <button className='signUpButton' name='signUp' onClick={this.signUp}>Sign Up</button>
                {/* <button className='signOutButton' name='signOut' onClick={this.signOut}>Sign out</button> */}
            </>
        )
    }
}


export default Login;