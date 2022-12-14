import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert(" Converted to UpperCase!", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert(" Converted to LowerCase!", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert(" Copy to Clipboard!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("  Removing all extra spaces", "success")
    }

    const handleClearText = () => {
        let newText = ""
        setText(newText)
        props.showAlert("  Clear all the text", "success")
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} value={text} onChange={handleOnChange} rows="8" />
                </div>

                <button disabled={text.length === 0} type="button" className={`btn btn-${props.mode === 'dark'? 'dark': "primary"} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} type="button" className={`btn btn-${props.mode === 'dark'? 'dark': "primary"} mx-1 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} type="button" className={`btn btn-${props.mode === 'dark'? 'dark': "primary"} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} type="button" className={`btn btn-${props.mode === 'dark'? 'dark': "primary"} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} type="button" className="btn btn-danger mx-1 my-1" onClick={handleClearText}>Clear Text</button>
                
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} - words and {text.length} - characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} :Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
