import React from 'react'

export default function About(props) {
    // const[btntxt,setBtn]=useState('Enable Dark Mode');
    // const[myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'black':'white',
    }
    // const toggleClick=()=>{
    //     if(myStyle.color ==='black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         }) 
    //         setBtn('Enable Light Mode') 
    //     }else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         }) 
    //         setBtn('Enable Dark Mode') 
    //     }
    // }
    let mystyle={
        color:props.mode==='dark'?'white':'black',
        
    }
  return (
    <div className='container' style={mystyle}>
        <center><h1 className='my-3' >About Us</h1></center>
        <div className="accordion" id="accordionExample">
                <div className="accordion-item"style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button"style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Analyze Your Text
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>StringStudio gives you a way to analyze your text quickly and efficiently.Be it word count,character count or time to read your text </strong>
                    </div>
                    </div>
                </div>
                <div className="accordion-item"style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button"style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Free To Use 
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>StringStudio is a free character counter tool that provides instant character count & word count statistics for a given text.StringStudio reports the number of words and characters.Thus it is suitable for nwriting text with word/character limit.</strong>
                    </div>
                    </div>
                </div>
                <div className="accordion-item"style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button"style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Browser Compatible
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This wordcounter software works in any web browserssuch as Chrome,Firefox,Internet Explorer,Safari ,Opera.It suits to count characters in facebook , blog,books,excel document,pdf document,essays etc</strong>
                    </div>
                    </div>
                </div>
         </div> 
         {/* <div className="container my-3">
                    <center><button type="button" onClick={toggleClick} className="btn btn-info">{btntxt}</button></center>
         </div> */}
    </div>
  )
}
