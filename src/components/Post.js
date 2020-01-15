import React from "react";
import '../App.css'

export default function Post({ title, content, img, id, deletePost, toggle}) {
  return (
    <section className="post">
      <h3>{title||'no title'}</h3>
      <img src={img||"https://via.placeholder.com/150/"} alt={`Post ${id}`} />
      <p>{content||"no content"}</p>
      <button className="post-buttons" onClick={() => toggle(id)}>Edit</button>
      <button className="post-buttons" onClick={() => deletePost(id)}>Delete</button>
    </section>
  );
}
