import {
    shallow
} from 'enzyme'
import LogOut from './LogOut'
import fire from '../fire'

describe('Log out', () => {
    it('should render a Log Out button', () => {
        const logout = shallow(< LogOut />)
        expect(logout.find('button[name="logOutbtn"]')).toHaveLength(1)
    })
    it('logout calls logout on firebase', () => {
        let signOut = jest.fn()
        fire.auth = jest.fn().mockImplementation(() => {
            return {
                signOut: signOut

            }
        });

        const login = shallow(< LogOut />)
        login.find('button[name="logOutbtn"]').simulate('click')
        expect(signOut).toHaveBeenCalled()
    })

})
