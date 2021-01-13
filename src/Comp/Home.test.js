import { shallow } from 'enzyme'
import Home from './Home'
import fire from '../fire'


describe('Home', () => {
    it('shows Signin component if not signged in', () => {

        const home = shallow(<Home user={null} />)
        expect(home.find('Signin')).toHaveLength(1)
    })

    it('shows Goals component and hides Signin when signged in', () => {

        const home = shallow(<Home user={"not null"} />)
        expect(home.find('Signin')).toHaveLength(0)
        expect(home.find('Goals')).toHaveLength(1)
    })

})