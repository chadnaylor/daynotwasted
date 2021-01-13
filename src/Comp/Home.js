import React from 'react'
import fire from '../fire'
import '../App.css'
import Signin from './SignIn';
import Goals from './Goals';

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        // const setUser = user => this.setState({ user })

        // fire.auth().onAuthStateChanged(function (user) {
        //     if (user) {
        //         setUser(user)
        //     } else {
        //         setUser(null)
        //     }
        // });
    }


    render() {

        return (
            <>
                <h1 className="Title"> Day Not Wasted </h1>
                { this.props.user === null ? <Signin /> : <Goals />}
            </>
        )
    }
}

export default HomePage;