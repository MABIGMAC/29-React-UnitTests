import { useState } from "react"
import Output from "./Output"

export default function Greeting() {

    const [changedText, setChangedText] = useState(false)

    function changeTextHandler(){
        setChangedText(true)
    }

    return <div>
        <h2>Hello world</h2>
        {changedText ? <Output>Nice to see you</Output>: <Output> Jello</Output>}
        <button onClick={changeTextHandler}/>
    </div>
}