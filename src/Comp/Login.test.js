import {
    shallow
} from 'enzyme'
import Login from './Login'
import fire from '../fire'

describe('Login', () => {
    it('should render an "emails" text box', () => {
        const login = shallow( < Login / > )
        expect(login.find('input[name="email"]')).toHaveLength(1)
    })
    it('should render a "password" text box', () => {
        const login = shallow( < Login / > )
        expect(login.find('input[name="password"]')).toHaveLength(1)
    })
    it('should render a sign in button', () => {
        const login = shallow( < Login / > )
        expect(login.find('button[name="signIn"]')).toHaveLength(1)
    })
    it('should render a sign up button', () => {
        const login = shallow( < Login / > )
        expect(login.find('button[name="signUp"]')).toHaveLength(1)
    })
    it('should render a sign out button', () => {
        const login = shallow( < Login / > )
        expect(login.find('button[name="signOut"]')).toHaveLength(1)
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

        const login = shallow( < Login / > )
        login.find('input[name="email"]').simulate('change', {target: {name: 'email', value: 'chad@daynotwasted.com'}})
        login.find('input[name="password"]').simulate('change' , {target: {name: 'password', value: 'password'}})
        login.find('button[name="signIn"]').simulate('click')
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

        const login = shallow( < Login / > )
        login.find('input[name="email"]').simulate('change', {target: {name: 'email', value: 'chad@daynotwasted.com'}})
        login.find('input[name="password"]').simulate('change' , {target: {name: 'password', value: 'password'}})
        login.find('button[name="signUp"]').simulate('click')
        expect(email).toEqual('chad@daynotwasted.com')
        expect(password).toEqual('password')
    })
    it('logout passes your email, and password to firebase', () => {
        let signOut = jest.fn()
        fire.auth = jest.fn().mockImplementation(() => {
            return {
                signOut: signOut
            
            }
        });

        const login = shallow( < Login/> )
        login.find('button[name="signOut"]').simulate('click')
        expect(signOut).toHaveBeenCalled()
    })
})