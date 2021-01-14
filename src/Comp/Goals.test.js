import { shallow } from 'enzyme'
import Goals from './Goals'

describe('Goals Page', () => {
    let goals;
    beforeEach(() => {
        let goalsList = ['one', 'two'];
        goals = shallow(<Goals goalsList={goalsList} />)
    })
    it('has a header of Goals', () => {
        expect(goals.find('.Goals')).toHaveLength(1)
    })
    it('displays goals', () => {
        expect(goals.find('.goalsList')).toHaveLength(2)
    })
    it('renders signout component', () => {
        expect(goals.find('SignOut')).toHaveLength(1)
    })
    it('renders a progress bar with each goal', () => {
        expect(goals.find('.goalsList')).toHaveLength(2)
        expect(goals.find('Progress')).toHaveLength(2)
    })
    // it('Passes progress and updateProgress to each progress bar', () => {
    //     const goalsList = ['one'];
    //     const goalsPassed = shallow(<Goals goalsList={goalsList} />)
    //     expect(goals.find('.goalsList')).toHaveLength(1)
    //     expect(goals.find('Progress')).toHaveLength(1)
    // })
})

