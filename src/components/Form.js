import React from 'react'
import '../App.css'

export default function Form(props){
        return(
            <div>
                <input name='title' placeholder='title' onChange={(e)=>props.handleChange(e.target)} value={props.title}/>
                <input name='img' placeholder='image' onChange={(e)=>props.handleChange(e.target)} value={props.img}/>
                <input name='content' placeholder='content' onChange={(e)=>props.handleChange(e.target)} value={props.content}/>
                <button className="body-buttons" onClick={()=>props.submitPost()}>Submit Post</button>
            </div>
        )
    
}