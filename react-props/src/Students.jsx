import PropTypes from "prop-types";

export function Students (props){
    return(
        <div className='student'>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is Student? : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

Students.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Students.defaultProps = {
    name: "Default",
    age: 0,
    isStudent:  false
}