import React from 'react';
import { Link, withRouter } from "react-router-dom";
import Input from '../../components/Input';
import Api from '../../utils/Api';

class Login extends React.Component {
    constructor(props) {
       super(props);
        this.state = {
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            error: ''
        }
    }

    onFieldChange = (fieldName) => (e) => {
        this.setState({ [fieldName]: e.target.value })
    }

    login = async () => {
        const {
            email,
            password,
        } = this.state;
        if(!email) {
            this.setState({error: 'Please enter email address'})
        } else if(!password) {
            this.setState({error: 'Please enter password'})
        } else {
            try {
                const { token } = await Api.post( '/signin', { email, password });
                localStorage.setItem('token', token);
                this.props.history.push("/");
            } catch (error) {
                this.setState({error: 'Something went wrong'});   
            }
        }
    }

    render() {
         if(!!localStorage.getItem('token')) {
            this.props.history.push("/")
         }
        
        return (
                <div className='auth-box'>
                    <h4 className='auth-box_title'>Login</h4>
                    <Input
                        label='Email'
                        type='text'
                        onChange={this.onFieldChange('email')}
                    />
                    <Input
                        label='Password'
                        type='password'
                        onChange={this.onFieldChange('password')}
                    />
                    {this.state.error && 
                    <div className='auth-box_error'>
                        {this.state.error}
                    </div>
                    }
                    
                    <button className='auth-box_btn' onClick={this.login}> Sign In </button>
                    <div style={{
                        textAlign: 'center',
                        marginBottom: 15,
                    }}>or <Link style={{color: '#2a3446'}} to='/register'>Sing Up</Link></div>

                </div>
        )
    }
}

export default withRouter(Login);