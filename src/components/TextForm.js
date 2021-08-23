import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success ");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success ");
    }

    const handleCopyClick = ()=> {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success ");
    }

    const handleClearClick = () =>{
        
        setText("");
        props.showAlert("Text Cleared!", "success ");
        
    }

    const handleExtraSpaces =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces have been removed!", "success ");
    }
    
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "Enter text here"; // wrong way to change the state
    // setText ("Enter text here"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:  props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1`} onClick={handleLoClick}>Convert to Lowercase</button>
            <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1`} onClick={handleCopyClick}>Copy Text</button>
            <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1`} onClick={handleExtraSpaces}>Remove Extra Spaces Text</button>
            <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1`} onClick={handleClearClick}>Clear All</button>
     </div>
     <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
         <h1>Your text summary</h1>
         <p>{text.split(" ").filter(function(n) { return n != '' }).length} words and {text.length} characters</p>
         <p>{0.008*text.split(" ").length}Minutes Read</p>
         <h2>Preview</h2>
         <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
     </div>
     </>
    )
}
