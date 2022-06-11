import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text;
        setText(newText.toUpperCase());
        props.showAlert('Message is transformed to Uppercase', 'success')
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const clearCase = () => {
        let newText = "";
        setText(newText);
        props.showAlert('Message is cleared', 'success')
    }
    const handleLowerCase = () => {
        let newText = text;
        setText(newText.toLowerCase());
        props.showAlert('Message is transformed to lowercase', 'success')
    }
    const [text, setText] = useState('Enter Text Here');
    return (
        <div className="fromWrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">

                        <hr />
                        <h1>{props.heading}</h1>


                        <div className="mb-3">

                            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleInputEmail1"  >
                            </textarea>
                            <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert to Uppercase</button>

                            <button className='btn btn-primary m-3' onClick={handleLowerCase}>Convert to Lowercase</button>
                            <button className='btn btn-primary m-3' onClick={clearCase}>Clear Text</button>
                        </div>

                        <div className="summary-box mb-3">
                            <h2>Text Summary</h2>
                            <p>Total Letter : {text.length}</p>
                            <p>Total Words : {text.split(" ").length}</p>
                            <p>Total Time to Read : {0.008 * text.split(" ").length}</p>
                            <h2>Preview</h2>
                            <span>
                                <small>
                                    <i>
                                        {text}
                                    </i>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}

TextForm.defaultProps = {
    heading: "Big Title Here"
}