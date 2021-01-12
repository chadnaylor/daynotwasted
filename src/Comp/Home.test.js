import {shallow} from 'enzyme'
import Home from './Home'
import fire from '../fire'


describe('Home', ()=>{
    it('shows Login component if not logged in', ()=>{
        const home = shallow(<Home/>)
        expect(home.find('Login')).toHaveLength(1)
    })

    it('shows Goals component and hides Login when logged in', ()=>{
        fire.auth = jest.fn().mockImplementation(()=>{
            return {
                "currentUser" : jest.fn()
            }
        })
        const home = shallow(<Home/>)
        expect(home.find('Login')).toHaveLength(0)
        expect(home.find('Goals')).toHaveLength(1)
    })
})