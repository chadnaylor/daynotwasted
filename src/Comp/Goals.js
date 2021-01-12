import React from 'react';


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
            <h1 className = "Goals" > Goals </h1>
            <ul>
            {this.state.goalsList ?
                this.state.goalsList
                .map(g => <li className='goalsList'> {g} </li>):
                <li>No goalslist</li>
            }
            </ul>
        </>
        )
    }
}

export default Goals;