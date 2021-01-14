import React from 'react';
import SignOut from './SignOut';
import './Goals.css'
import Progress from './Progress'

class Goals extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            goalsList: props.goalsList ? props.goalsList : []
        }
    }

    updateGoals = () => {
        if (this.state.newGoal.length > 0) this.setState({
            goalsList:
                [...this.state.goalsList, { name: this.state.newGoal, progress: 0 }]
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    getUpdateProgress = (goalId) => {
        return (time) => {
            let newList = this.state.goalsList
            newList[goalId].progress += parseInt(time)
            this.setState({ goalsList: newList })
        }
    }

    // goalsListsssss(g, i){
    //     return(
    //         <>
    //             <div className> {g.name} </div>
    //             <div className="progress"> {g.progress} </div>
    //         </>
    //     )
    // }

    render() {
        return (
            <>
                <div className="Goals" > Goals
                    <input className="newGoal" name="newGoal" placeholder="Learn to code..." onChange={e => this.handleChange(e)}></input>
                    <a href="#">

                        <button className="addGoal" name="addGoalBtn" onClick={this.updateGoals}> Add Goal </button>
                    </a>
                </div>
                <div className='listOfGoals'>
                    {
                        this.state.goalsList ?
                            this.state.goalsList
                                .map((g, i) => <div key={i} className='goalsList'> {g.name}
                                    <Progress progress={g.progress} updateProgress={this.getUpdateProgress(i)} /></div>) :
                            <div className='goalsList'>No goalslist</div>
                    }
                </div>
            </>
        )
    }
}

export default Goals;
