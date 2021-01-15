import { shallow } from 'enzyme'
import Goals from './Goals'
import fire from '../fire'

describe('Goals Page', () => {
    let goals;
    let set = jest.fn(), on = jest.fn()
    beforeEach(() => {
        fire.database = jest.fn().mockImplementation(() => {
            return {
                ref: jest.fn().mockImplementation(() => {
                    return {
                        set: set,
                        on: on
                    }
                })
            }
        })
        fire.auth = jest.fn().mockImplementation(() => {
            return {
                currentUser: { uid: 4 }
            }
        })
        let goalsList = [{ name: 'one', progress: 0 }, { name: 'two', progress: 0 }];
        goals = shallow(<Goals goalsList={goalsList} />)
    })
    it('calls firebase for adding goals', () => {
        goals.find('input[name="newGoal"]').simulate('change', { target: { name: 'newGoal', value: 'Learn to read' } })
        goals.find('button[name="addGoalBtn"]').simulate('click')
        expect(set).toHaveBeenCalled()
    })
    it('has a header of Goals', () => {
        expect(goals.find('.Goals')).toHaveLength(1)
    })
    it('displays goals', () => {
        expect(goals.find('.goalsList')).toHaveLength(2)
    })
    // it('renders signout component', () => {
    //     expect(goals.find('SignOut')).toHaveLength(1)
    // })
    it('renders a progress bar with each goal', () => {
        expect(goals.find('.goalsList')).toHaveLength(2)
        expect(goals.find('Progress')).toHaveLength(2)
    })
    it('renders an input box to enter a new goal and an "Add Goal" button is displayed', () => {
        expect(goals.find('input[name="newGoal"]')).toHaveLength(1)
        expect(goals.find('button[name="addGoalBtn"]')).toHaveLength(1)
    })
    it('Adds a goal when input is entered and "Add Goal" button is clicked', () => {
        let cb
        on.mockImplementation((val, callback) => {
            cb = callback
        })

        goals = shallow(<Goals />)
        expect(typeof cb).toBe('function')
        cb({ val: () => ({ goals: [{ name: 'Learn to read' }] }) })
        goals.update()
        expect(goals.find('.listOfGoals').text()).toContain('Learn to read')
    })
    it('Will not let user submit an empty goal', () => {
        goals.find('input[name="newGoal"]').simulate('change', { target: { name: 'newGoal', value: '' } })
        goals.find('button[name="addGoalBtn"]').simulate('click')
        expect(goals.find('.goalsList')).toHaveLength(2)
    })
    it('Passes progress and updateProgress funcs to Progress components', () => {
        expect(goals.find(`Progress`).first().prop('progress')).toBeDefined()
        expect(goals.find(`Progress`).first().prop('updateProgress')).toBeDefined()
    })
    it('Calling updateProgress will update the specified goal progress', () => {
        let time = 13
        goals.find(`Progress`).first().prop('updateProgress')(time)
        expect(set).toHaveBeenCalled()
    })
    it('Renders a "Delete Goal" button alongside each goal', () => {
        expect(goals.find('button[name="deleteBtn"]')).toHaveLength(2)
    })
    it('When "Delete Goal" is clicked, the specified goal will be deleted', () => {
        goals.find('button[name="deleteBtn"]').first().simulate('click')
        expect(set).toHaveBeenCalledWith({goals: [{name: 'two', progress: 0 }]})
        //expect(find('.goalsList')).toHaveLength(1)
    })
})
