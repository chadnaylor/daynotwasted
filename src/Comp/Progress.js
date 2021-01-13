import React from 'react'

class Progress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: 10
        }
    }

    updateProgress = () => {
        this.props.updateProgress(this.state.progress)
    }



    render() {
        return (
            <>
                <div>Your progress: {this.props.progress} minutes</div>
                <input name='time' value='10' type='number' />
                <button name='addMinutes' onClick={this.updateProgress} >Add minutes</button>

            </>
        )
    }
}

export default Progress;