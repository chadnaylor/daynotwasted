import React from 'react'

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
                <div>Your progress: {this.props.progress} minutes</div>
                <input name='time' value='10' type='number' onChange={e => this.handleChange(e)} />
                <button name='addMinutes' onClick={this.updateProgress} >Add minutes</button>
            </>
        )
    }
}

export default Progress;