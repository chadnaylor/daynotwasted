import React from 'react';
import SignOut from './SignOut';
import './Goals.css'
import Progress from './Progress'

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
                <div className="Goals" > Goals
                    <input name="newGoal" placeholder="Learn to code..." ></input>
                    <button className="addGoal" name="addGoalBtn"> Add Goal </button>
                </div>
                <SignOut />
                {
                    this.state.goalsList ?
                        this.state.goalsList
                            .map(g => <div className='goalsList'> {g} <Progress /></div>) :
                        <div>No goalslist</div>
                }

            </>
        )
    }
}

export default Goals;