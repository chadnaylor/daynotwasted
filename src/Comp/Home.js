import React from 'react'
import fire from '../fire'
import '../App.css'

class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            displayName: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.signIn = this.signIn.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value } )
    }

    signIn(){
        console.log(this.state)
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then( () => {
            alert("Signed In")
        }).catch(() => {
            alert("wrong Creds.")
        })
        this.forceUpdate()
    }

    signUp(){
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            fire.auth().currentUser.updateProfile(
                {
                    displayName: this.state.displayName
                }
            )})
        .then(() => {
            alert("you have been sign up")
        })
        .catch(() => {
            alert("something went wrong")
        })
        this.forceUpdate()
    }

    render() {

       return (
           <>
            <h1 className = "Title"> Day Not Wasted </h1>
            <label> email: </label>
            <input name='email' onChange={ e => this.handleChange(e)} />
            <div />
            <label>password: </label>
            <input name='password' type='password' onChange={(e) => this.handleChange(e)} />
            <br/>
            <label>display name</label>
            <input name='displayName' onChange={(e) => this.handleChange(e)} />
            <br/>
            <button onClick={ this.signIn }> signIn </button>
            <button onClick={this.signUp }>Sign Up</button>
            <button onClick={fire.auth().signOut}>Sign out</button>
            {fire.auth().currentUser === null? <div>please sign in or  up</div>: <div>{fire.auth().currentUser.displayName}</div>}
            </>
       )}
}

export default HomePage;