import React from 'react';
import fire from '../fire'

class LogOut extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <button className='logoutButton' name='logOutbtn' onClick={this.signOut}>Log Out</button>
            </>
        )
    }
    signOut() {
        fire.auth().signOut()

    }
}

export default LogOut;