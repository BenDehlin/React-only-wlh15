import React from 'react'
import Post from './Post'


export default function Posts(props){
  let list =  []
  const {posts, filter, filteredPosts, deletePost, editPost} = props
  if(filter === false){
    list = posts.map(el => (
      <Post key={el.id} id={el.id} title={el.title} img={el.img}
      content={el.content} deletePost={deletePost} editPost={editPost} />
    ))
  }else{
    list = filteredPosts.map(el => (
      <Post key={el.id} id={el.id} title={el.title} img={el.img}
      content={el.content} deletePost={deletePost} editPost={editPost} />
    ))
  }
  return(
    <div>
      {list}
    </div>
  )
}