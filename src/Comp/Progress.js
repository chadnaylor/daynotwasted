import React from 'react'
import '../App.css'
import './Goals.css'
import styled from 'styled-components'

class Progress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 10
        }
    }

    updateProgress = () => {
        this.props.updateProgress(this.state.time)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    progressBar = () => {
        const hour = 60;
        const time = this.props.progress;
        var level = time / hour;
        var remainder = time % hour;
        var progress = 200 / remainder;
        //document.getElementsByClassName(progress).style.width = progress;
        return(
            <>
                <div> Level: {Math.floor(level)} </div>
                <div className='bar'>
                    <div className='progress' />
                </div>
            </>
        )
    }

    render() {
        return (
            <>

                <div>You dedicated: {this.props.progress} minutes</div>
                <input className='timeSpent' name='time' placeholder="Time spent" type='number' onChange={e => this.handleChange(e)} />
                <button className='addMinutes' name='addMinutes' onClick={this.updateProgress} >Add minutes</button>
                <br/>
                <div> Level: {Math.floor(this.props.progress / 60)}</div>
                <progress value={ this.props.progress % 60 } max="60" />

            </>
        )
    }
}

export default Progress;