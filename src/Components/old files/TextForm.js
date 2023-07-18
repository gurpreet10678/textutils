import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = () => {
    console.log("button clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase', 'success');
  };
  const handleLoClick = () => {
    console.log("button clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase', 'success');
  };
  const handleClearClick = () => {
    console.log("button clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert('Text cleared', 'success');
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    console.log("text copied");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text copied', 'success');
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces cleared', 'success');
  };
  return (
    <>
      <div className={`container text-${props.textMode === 'dark' ? 'dark' : 'light'} `} >
        <div className="mb-3 my-3">
          <h1>{props.heading}</h1>
          <textarea
            className={`form-control bg-${props.mode === 'dark' ? 'secondary'
                                                        : 'danger' ? 'danger'
                                                        : 'light' }`}
            onChange={handleOnChange}
            value={text}
            id="mybox"
            rows="8"
            style={{
                    // backgroundColor: props.mode === 'dark' ? 'grey'
                    // : 'danger' ? '#ff6666'
                    // : 'light' ? 'white'
                    // : 'white',
                    // color: props.mode === 'dark' ? 'white' : 'black'
                    color: props.mode === 'dark' ? 'white'
                    : 'danger' ? 'white'
                    : 'black'
                  }}
          ></textarea>
        </div>
      </div>
      <div className="container"
        style={{color: props.mode === 'dark' ? 'white' : 'black'}}
      >
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lower
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Clear Spaces
        </button>
      </div>

      <div className="container my-3"
        style={{color: props.mode === 'dark' ? 'white' : 'black'}}
      >
        <h2>Your Text Summary</h2>
        <p>
          words {text.split(" ").length -1} and characters {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'type something to preview'}</p>
      </div>
    </>
  );
}
