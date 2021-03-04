import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginSection(props) {
    return (
        <div>
            <h1>Welcome back!</h1>
            <p>Please check that you are visiting the correct URL.</p>
            <input type="text" placeholder="Email address" /> <br/>
            <input type="text" placeholder="Password" /> <br/>
            <button>Login</button>
            <Link to='./signup'>
                <a>Free registration</a>
            </Link>
        </div>
    )
} 