import React from 'react';
import { Link, withRouter } from "react-router-dom";
import Input from '../../components/Input';
import Api from '../../utils/api';
import { isUserLoggedIn } from '../../utils/auth';

class Signin extends React.Component {
    constructor(props) {
       super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            error: ''
        }
    }

    onFieldChange = (fieldName) => (e) => {
        this.setState({ [fieldName]: e.target.value })
    }

    login = async () => {
        const {
            firstName,
            lastName,
            email,
            password,
        } = this.state;

        if(!firstName) {
            this.setState({error: 'Please enter firstName'})
        } else if(!email) {
            this.setState({error: 'Please enter email address'})
        } else if(!password) {
            this.setState({error: 'Please enter password'})
        } else {
            try {
                const { token } = await Api.post( '/signup', { email, password, firstName, lastName });
                localStorage.setItem('token', token);
                this.props.history.push("/protected");
            } catch (error) {
                console.log(error)
                this.setState({error: error.message});   
            }
        }
    }

    render() {
        if(isUserLoggedIn()) {
            this.props.history.push("/")
        }

        return (
            <div>
                <h1>
                    MERN JWT
                </h1>
                <div className='auth-box'>
                    <h4 className='auth-box_title'>Register</h4>
                    <Input
                        label='First Name'
                        type='text'
                        onChange={this.onFieldChange('firstName')}
                    />
                    <Input
                        label='Last Name'
                        type='text'
                        onChange={this.onFieldChange('lastName')}
                    />
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
                    <button className='auth-box_btn' onClick={this.login}> Register </button>

                </div>
            </div>
        )
    }
}

export default withRouter(Signin);