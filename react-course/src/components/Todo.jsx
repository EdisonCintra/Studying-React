import {useState} from "react"
import {Modal} from "./Modal.jsx";
import {Backdrop} from "./Backdrop.jsx";

export function Todo(props) {
    const [modalIsOpen, setModalIsOpen ] = useState(false) //react hook

    function deleteHandler(){
        setModalIsOpen(true)
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal/>}
            {modalIsOpen && <Backdrop/>}
        </div>
    )
}
