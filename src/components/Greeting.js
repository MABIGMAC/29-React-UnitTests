import { useState } from "react"

export default function Greeting() {

    const [changedText, setChangedText] = useState(false)

    function changeTextHandler(){
        setChangedText(true)
    }

    return <div>
        <h2>Hello world</h2>
        {changedText ? <p>Nice to see you</p>: <p> Jello</p>}
        <button onClick={changeTextHandler}/>
    </div>
}