import React ,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked" +text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleLoClick = ()=>{
        // console.log("uppercase was clicked" +text);
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const clear =()=>{
        let newtext = '';
        setText(newtext)
    }
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value)
    }
   
       const [text,setText] = useState("");
    return (
        <>
        <div className="container" style ={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
             <div className="mb-3">
            <label htmlFor="mytext" className="form-label">Example textarea</label>
            <textarea className="form-control" value = {text} onChange ={handleOnChange} style ={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}} id="mytext" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-1 mx-y"  onClick = {handleUpClick}> Convert into uppercase</button>
            <button className="btn btn-primary mx-1 mx-y" onClick = {handleLoClick}> Convert into lowercase</button>
            <button className="btn btn-primary mx-1 mx-y" onClick = {clear}> Clear text</button>
        </div>
        <div className="container my-3" style ={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your text here</h1>
        <p>{text.split("").length} words and {text.length} characters in the textarea</p>
        <p>{0.008*text.split("").length} minutes read</p>
        
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>
    )
}
