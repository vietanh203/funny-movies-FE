import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            email: '',
            password: '',
            isLoggedin: false
        }
    }
    onClickLogOut(e) {
        this.setState({
            isLoggedin: false
        })
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });

    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('form submitted');
        const User = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://localhost:4000/signin', User)
            .then(res => this.setState({
                email: res.data.email,
                isLoggedin: true
            }));
    }
    render() {
        if (this.state.isLoggedin)
            return (
                <form className="form-inline my-2 my-lg-0">
                    <h5>Welcome {this.state.email}</h5>
                    <Link className="btn btn-outline-primary">Share a movie</Link>
                    <button className="btn btn-outline-primary my-2 my-sm-0 ">Logout</button>
                </form>
            )
        return (
            <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
                <input className="form-control mr-sm-2" type="text" placeholder="email" value={this.state.email} onChange={this.onChangeEmail} />
                <input className="form-control mr-sm-2" type="password" placeholder="password" value={this.state.password} onChange={this.onChangePassword} />
                <input className="btn btn-outline-primary my-2 my-sm-0" type="submit" value="Login/Register" />
            </form>
        )
    }
}