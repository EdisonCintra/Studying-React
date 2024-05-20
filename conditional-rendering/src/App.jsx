import './App.css'
import {UserGreeting} from "./UserGreeting.jsx";

function App() {
    return (
        <>
            <UserGreeting isLoggedIn={true} username="Edisu"></UserGreeting>
        </>
    )

}

export default App
