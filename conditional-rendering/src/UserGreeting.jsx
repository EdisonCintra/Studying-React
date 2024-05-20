import PropTypes from "prop-types";

export function UserGreeting(props) {

    if (props.isLoggedIn) {
        return <h1 className='welcome-message'>Welcome {props.username}</h1>
    } else {
        return <h1 className='login-prompt'>Please log in to continue</h1>
    }

}

UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: String
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}