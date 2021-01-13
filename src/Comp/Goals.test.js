import { shallow } from 'enzyme'
import Goals from './Goals'

describe('Goals Page', () => {
    it('Should have a header of Goals', () => {
        const goals = shallow(<Goals />)
        expect(goals.find('.Goals')).toHaveLength(1)
    })
    it('Should display goals', () => {
        const goalsList = ['one', 'two'];
        const goals = shallow(<Goals goalsList={goalsList} />)
        expect(goals.find('.goalsList')).toHaveLength(2)
    })
    it('renders signout component', () => {
        const goals = shallow(<Goals />)
        expect(goals.find('SignOut')).toHaveLength(1)
    })
})

