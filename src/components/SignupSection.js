import React from 'react';

export default function SignUpSection(props) {
    return (
        <div>
            <h1>Sign up for free</h1>
            <p>Welcome to Coinswap</p>
            <input type="text" placeholder="Email address" /> <br/>
            <input type="text" placeholder="Password" /> <br />
            <form>
                <input type="checkbox"/>
                <label>I have read and agree to the Terms of Service.</label><br></br>
            </form>
            <button>Register</button>
        </div>
    )
} 