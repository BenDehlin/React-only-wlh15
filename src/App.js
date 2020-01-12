import React, {Component} from "react";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import Posts from './components/Posts'
import Form from "./components/Form";
import ToTop from "./components/ToTop"

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      title: "",
      img: "",
      content: "",
      id: 1,
      search: '',
      filteredPosts: [],
      filter: false
    };
  }

  handleChange = ({name, value}) => {
    this.setState({ [name]: value });
  }

  handleSearch = () => {
    let {posts, filteredPosts, search} = this.state
    filteredPosts = posts.filter(post => post.content.includes(search))
    this.setState({filteredPosts: filteredPosts, filter: true, search: ''})
  }

  handleClear = () => {
    this.setState({filter: false, search: ''})
  }

  submitPost = () => {
    const { title, img, content, id, posts } = this.state;
    this.setState({
      posts: [
        {
          id,
          title,
          img,
          content
        },
        ...posts
      ],
      id: id + 1,
      title: "",
      img: "",
      content: "",
      search: "",
      filter: false
    });
  };

  deletePost = id => {
   const filteredArr = this.state.posts.filter(el => el.id !== id)
   this.setState({posts: filteredArr})
  };

  editPost = id => {
    alert("Edit post coming soon")
  }

  render() {
    const {title, img, content, posts, filter, filteredPosts, search} = this.state
    return (
      <div className="App">
        <Header 
          handleChange={this.handleChange}
          search={search}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear} />
        <div className="body">
        <Form
          handleChange={this.handleChange}
          title={title}
          img={img}
          content={content}
          submitPost={this.submitPost}
        />
        <Posts posts={posts} filter={filter} filteredPosts={filteredPosts} deletePost={this.deletePost} editPost={this.editPost} />
        </div>
        <ToTop />
      </div>
    );
  }
}

export default App;
