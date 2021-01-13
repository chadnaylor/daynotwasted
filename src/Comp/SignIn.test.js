import {
    shallow
} from 'enzyme'
import Signin from './SignIn'
import fire from '../fire'

describe('Signin', () => {
    it('should render an "emails" text box', () => {
        const signin = shallow(< Signin />)
        expect(signin.find('input[name="email"]')).toHaveLength(1)
    })
    it('should render a "password" text box', () => {
        const signin = shallow(< Signin />)
        expect(signin.find('input[name="password"]')).toHaveLength(1)
    })
    it('should render a sign in button', () => {
        const signin = shallow(< Signin />)
        expect(signin.find('button[name="signIn"]')).toHaveLength(1)
    })
    it('should render a sign up button', () => {
        const signin = shallow(< Signin />)
        expect(signin.find('button[name="signUp"]')).toHaveLength(1)
    })
    it('sign in passes email and password to firebase', () => {
        let email, password;
        fire.auth = jest.fn().mockImplementation(() => {
            return {
                signInWithEmailAndPassword: jest.fn()
                    .mockImplementation((e, p) => {
                        email = e
                        password = p
                        return new Promise(jest.fn())
                    })
            }
        });

        const signin = shallow(< Signin />)
        signin.find('input[name="email"]').simulate('change', { target: { name: 'email', value: 'chad@daynotwasted.com' } })
        signin.find('input[name="password"]').simulate('change', { target: { name: 'password', value: 'password' } })
        signin.find('button[name="signIn"]').simulate('click')
        expect(email).toEqual('chad@daynotwasted.com')
        expect(password).toEqual('password')

    })
    it('sign up passes your email, and password to firebase', () => {
        let email, password;
        fire.auth = jest.fn().mockImplementation(() => {
            return {
                createUserWithEmailAndPassword: jest.fn()
                    .mockImplementation((e, p) => {
                        email = e
                        password = p

                        return new Promise(jest.fn())
                    })
            }
        });

        const signin = shallow(< Signin />)
        signin.find('input[name="email"]').simulate('change', { target: { name: 'email', value: 'chad@daynotwasted.com' } })
        signin.find('input[name="password"]').simulate('change', { target: { name: 'password', value: 'password' } })
        signin.find('button[name="signUp"]').simulate('click')
        expect(email).toEqual('chad@daynotwasted.com')
        expect(password).toEqual('password')
    })

})