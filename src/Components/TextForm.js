import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  

    const HandleUpClick=()=>
    {
 
        let newText=Text.toUpperCase();
        setText(newText);
    }

    const OnChange=(event)=>
    {
        setText(event.target.value)
    }
    const HandleloClick=()=>
    {
      
        let newText=Text.toLowerCase();
        setText(newText);
    }
   
    const HandleClear=()=>
    {
   
        setText("");
    }
   

    const [Text, setText] = useState("");
  return (
    <>
<div  style={{color: props.mode==='dark'?'white':'black'}}>
<h1>  {props.textArea}</h1>

<div className="mb-3" >
    
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#343a40':'white',color: props.mode==='dark'?'white':'dark'}} onChange={OnChange} value= {Text} id="TextBox" rows="10"></textarea>
</div >
<button className="btn btn-primary" onClick={HandleUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-3" onClick={HandleloClick}>Convert To LowerCase</button>
<button className="btn btn-primary " onClick={HandleClear}>Clear</button>
</div>
<div className="container my-3 mx-2" style={{color: props.mode==='dark'?'white':'black'}}>
<h2>Summary</h2>

<p><b>{Text.split(" ").length}</b> Words And <b>{Text.length}</b> Characters</p>
<p>Time Require to read: <b>{Text.split(" ").length * 0.008-0.008} minutes </b>.</p>
<h3 className='my-3 '>Preview</h3>
<p>{Text}</p>

</div>
</>

  )
}


TextForm.defaultProps={textArea:"Title Here"}
TextForm.propTypes = {textArea :  PropTypes.string}