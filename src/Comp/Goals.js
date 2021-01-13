import React from 'react';
import LogOut from './LogOut';


class Goals extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            goalsList: props.goalsList
        }
    }

    render() {
        return (
            <>
                <LogOut />
                <h1 className="Goals" > Goals </h1>
                <ul>
                    {
                        this.state.goalsList ?
                            this.state.goalsList
                                .map(g => <li className='goalsList'> {g} </li>) :
                            <li>No goalslist</li>
                    }
                </ul>
            </>
        )
    }
}

export default Goals;