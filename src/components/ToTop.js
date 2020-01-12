import React, {Component} from 'react'
import '../App.css'

export default class ToTop extends Component{
  constructor(){
    super()
    this.state = {}
  }

  handleBackToTop=()=>{
    alert("Back to top coming soon")
  }

  render(){
    return(
    <div className="back-to-top">
      <button className="body-buttons"
      onClick = {() => {this.handleBackToTop()}}>To Top</button>
    </div>
    )
  }
}