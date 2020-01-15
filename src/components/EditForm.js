import React, {Component} from 'react'
import '../App.css'

export default class Form extends Component{

  componentDidUpdate(preProps, preState){
    if(preProps.name !== this.props.name){
      return true
    }
  }

  render(){
    let {title, first_name, img, content, handleChange, handleEdit} = this.props
    return(
    <div>
      <input name='title' placeholder='title' onChange={(e)=>handleChange(e.target)} value={title}/>
      <input name='img' placeholder='image' onChange={(e)=>handleChange(e.target)} value={img}/>
      <input name='content' placeholder='content' onChange={(e)=>handleChange(e.target)} value={content}/>
      <input name='first_name' placeholder='first_name' value={first_name}
      onChange={(e)=> handleChange(e.target)} />
      <button className="body-buttons" onClick={()=>
        handleEdit()}>Edit Post</button>
    </div>
    )
  }
}