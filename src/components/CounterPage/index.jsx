import React, { useState } from 'react';
import "./style.css"

export default function WordCount(props) {
  const [word, convertWord] = useState("")


  function onUpConversion() {
    convertWord(word.toUpperCase())
  }

  function onLoConversion() {
    convertWord(word.toLowerCase())
  }

  function onClearWords() {
    convertWord("")
  }

  function onCopy() {
    const text = document.getElementById("my-box");
    text.select();
    navigator.clipboard.writeText(text.value)
  }

  function removeExSpaces() {
    let newText = word.split(/[ ]+/)
    convertWord(newText.join(" "))
  }


  function handleChange(event) {
    convertWord(event.target.value);
  }

  return (
    <div className='main--container'>
      <h1 className='heading'>{props.heading}</h1>
      <div className="mb-3">
        <textarea onChange={handleChange}
          className="form-control"
          id="my-box" rows="8"
          value={word}
          placeholder="Type here..."
        ></textarea>

      </div>

      <div>
        <button onClick={onUpConversion} className="btn btn-primary">Convert to uppercase</button>

        <button onClick={onLoConversion} className=" btn btn-primary">Convert to lowercase</button>

        <button onClick={onClearWords} className=" btn btn-primary">Clear texts</button>

        <button onClick={onCopy} className=" btn btn-primary">Copy texts</button>

        <button onClick={removeExSpaces} className=" btn btn-primary">Remove extra spaces</button>



      </div>
      <div className='child-container'>
        <h3 className='heading'>Summery</h3>

        <h4>
          you have typed {word.split(" ").length} words and {word.length} characters
        </h4>

        <h5 className='my-3'>{0.008 * word.split(" ").length} minutes read</h5>

        <h2 className='heading'>preview</h2>

        <h5>{word.length > 0 ? word : "Enter text above to preview"}</h5>

      </div>
    </div>
  );
};
