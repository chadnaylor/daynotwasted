import React from 'react'
import fire from '../fire'
import '../App.css'
import Signin from './SignIn';
import Goals from './Goals';
import SignOut from './SignOut'
class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="background">
                <div className="Title">
                    Day Not Wasted
                    {this.props.user !== null ? <SignOut /> : <div />}
                </div>
                { this.props.user === null ? <Signin /> : <Goals />}
            </div>
        )
    }
}

export default HomePage;