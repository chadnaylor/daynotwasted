import React from 'react'
import '../App.css'
import './Goals.css'

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

    render() {
        return (
            <>

                <div>You dedicated: {this.props.progress} minutes</div>
                <input className='timeSpent' name='time' placeholder="Time spent" type='number' onChange={e => this.handleChange(e)} />
                <button className='addMinutes' name='addMinutes' onClick={this.updateProgress} >Add minutes</button>

            </>
        )
    }
}

export default Progress;