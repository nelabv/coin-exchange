import React from 'react';
import PropTypes from 'prop-types';


export default function ViewBalance(props){
    const handleChange = () => {
        props.setPrivacy();
    }

    const buttonText = props.isPrivate ? "Hide Balance" : "Show Balance";

    return (
        <div>

            { props.isPrivate
                ? <p>Current Balance: {props.balance}</p>
                : null}

            <div>
                <button onClick={handleChange}>{buttonText}</button>
            </div>

        </div>
    );

}

ViewBalance.propTypes = {
    balance: PropTypes.number.isRequired
}