import React from 'react'
import fire from '../fire'
import '../App.css'
import Login from './Login';
import Goals from './Goals';

class HomePage extends React.Component {
    constructor(props){
        super(props)

    }

    render() {

       return (
           <>
            <h1 className = "Title"> Day Not Wasted </h1>
            { fire.auth().currentUser === null ? <Login/> : <Goals/> }
            </>
       )}
}

export default HomePage;