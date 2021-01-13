import {
    shallow
} from 'enzyme'
import SignOut from './SignOut'
import fire from '../fire'

describe('Sign out', () => {
    it('should render a Sign Out button', () => {
        const signout = shallow(< SignOut />)
        expect(signout.find('button[name="signOutbtn"]')).toHaveLength(1)
    })
    it('signout calls signout on firebase', () => {
        let signOut = jest.fn()
        fire.auth = jest.fn().mockImplementation(() => {
            return {
                signOut: signOut

            }
        });

        const signin = shallow(< SignOut />)
        signin.find('button[name="signOutbtn"]').simulate('click')
        expect(signOut).toHaveBeenCalled()
    })

})
