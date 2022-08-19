import './style.css'
import {useState} from "react";
import Fader from "./components/Fader";


const App = () => {
    const [toggle, setToggle] = useState(false);

    const onTransitionCompleted = (fadeIn) => {
        console.log(fadeIn)
    }

    return (
        <>
            <button onClick={() => setToggle(t => !t)}>Click!</button>
            <Fader fadeIn={toggle} onTransitionEnd={(fadeIn) => onTransitionCompleted(fadeIn)}>

            </Fader>

        </>
    )
}
export default App;