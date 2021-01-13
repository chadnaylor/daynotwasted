import React from 'react';
import fire from '../fire'

class SignOut extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <button className='signOutButton' name='signOutbtn' onClick={this.signOut}>Sign Out</button>
            </>
        )
    }
    signOut() {
        fire.auth().signOut()

    }
}

export default SignOut;