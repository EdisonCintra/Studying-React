import {useState} from "react"
import {Modal} from "./Modal.jsx";
import {Backdrop} from "./Backdrop.jsx";

export function Todo(props) {
    const [modalIsOpen, setModalIsOpen ] = useState(false) //react hook

    //1;28;17

    function deleteHandler(){
        setModalIsOpen(true)
    }

    function closeModalHandler(){
        setModalIsOpen(false)
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
            {modalIsOpen && <Backdrop Cancel={closeModalHandler}/>}
        </div>
    )
}
