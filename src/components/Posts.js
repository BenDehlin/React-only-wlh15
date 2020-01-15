import React from 'react'
import Post from './Post'


export default function Posts(props){
  let list =  []
  const {posts, filter, filteredPosts, deletePost, toggle} = props
  filter ? list = filteredPosts : list = posts
  list = list.map(el => (
    <Post key={el.id} id={el.id} title={el.title} img={el.img}
    content={el.content} deletePost={deletePost} toggle={toggle} />
  ))
  return(
    <div>
      {list}
    </div>
  )
}