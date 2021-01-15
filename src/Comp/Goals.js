import React from 'react';
import SignOut from './SignOut';
import './Goals.css'
import Progress from './Progress'
import fire from '../fire'

class Goals extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            goalsList: props.goalsList ? props.goalsList : []
        }
    }

    updateGoals = () => {
        if (this.state.newGoal.length > 0)
            fire.database().ref('users/' + fire.auth().currentUser.uid).set({

                goals: [...this.state.goalsList, { name: this.state.newGoal, progress: 0 }]
            })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    getUpdateProgress = (goalId) => {
        return (time) => {
            let newList = this.state.goalsList
            newList[goalId].progress += parseInt(time)
            fire.database().ref('users/' + fire.auth().currentUser.uid).set({
                goals: newList
            })
        }
    }

    componentDidMount() {
        fire.database().ref('users/' + fire.auth().currentUser.uid).on('value', (snapshot) => {
            var data = snapshot.val()
            if (data !== null) {
                this.setState({ goalsList: data.goals })
            } else {
                 this.setState({ goalsList: [] })
            }
        })
    }

    deleteGoal = (i) => {
        let newGoals = [...this.state.goalsList]
        newGoals.splice(i,1)
        fire.database().ref('users/' + fire.auth().currentUser.uid).set({
            goals: newGoals
        })
    }

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
                                .map((g, i) =>  <div key={i} className='goalsList'> 
                                                    {g.name}
                                                    <Progress progress={g.progress} updateProgress={this.getUpdateProgress(i)} />
                                                    <p>
                                                    <button className="deleteBtn" name='deleteBtn' onClick={()=>this.deleteGoal(i)}>Delete Goal</button>
                                           

                                                    </p>
                                                </div>) :
                                                <div className='goalsList'>No goalslist</div>
                    }

                </div>
            </>
        )
    }
}

export default Goals;
