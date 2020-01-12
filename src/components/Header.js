import React from 'react'
import '../App.css'

export default function Header(props){
    return (
        <div className="header">
            <h1>Post Feed</h1>
            <div>
                <input name="search" value={props.search} placeholder="search"
                onChange ={e => {props.handleChange(e.target)}}/>
                <button className="header-buttons"
                onClick ={() => {props.handleSearch()}}>Search Posts</button>
                <button className="header-buttons"
                onClick ={() => {props.handleClear()}}>X</button>
            </div>
        </div>
    )
}