import React, {Component} from "react"
import "./App.css"
import Header from "./components/Header"
import Posts from './components/Posts'
import Form from "./components/Form"
import EditForm from "./components/EditForm"
import ToTop from "./components/ToTop"
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      title: "",
      first_name: '',
      img: "",
      content: "",
      id: 1,
      search: '',
      filteredPosts: [],
      filter: false,
      postsUrl: 'http://localhost:4321/api/posts',
      toggleEdit: false,
      editId: null
    };
  }

  componentDidMount(){
    const {postsUrl} = this.state
    axios.get(postsUrl).then(results => {
      this.setState({posts: results.data})
    })
  }
  submitPost = () => {
    const {postsUrl, title, img, content, first_name} = this.state
    let post = {title, img, content, first_name}
    axios.post(postsUrl, post).then(results => {
      this.setState({posts: results.data})
    })
  }
  handleEdit = () => {
    let {postsUrl, editId, first_name, title, img, content} = this.state
    axios.put(`${postsUrl}/${editId}`, {editId, first_name, title, img, content}).then(results => {
      this.setState({posts: results.data,
        editId: '', first_name: '', title: '', img: '', content: '', toggleEdit: false
      })
    })
  }
  handleDelete = (id) => {
    const {postsUrl} = this.state
    axios.delete(`${postsUrl}/${id}`).then(results => {
      this.setState({posts: results.data})
    })
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

  toggle = (id) => {
    let {posts} = this.state
    let {first_name, title, content, img} = posts.filter(el => id === el.id)
    this.setState({toggleEdit: !this.state.toggleEdit,
      editId: id,
      first_name,
      img,
      content,
      title
    })}

  render() {
    const {title, img, content, posts, filter, filteredPosts, search, name, toggleEdit} = this.state

    return (
      <div className="App">
        <Header 
          handleChange={this.handleChange}
          search={search}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear} />
        <div className="body">
          {!toggleEdit? (
        <Form
          handleChange={this.handleChange}
          title={title}
          img={img}
          name={name}
          content={content}
          submitPost={this.submitPost}
        /> ):(
        <EditForm
          handleChange={this.handleChange}
          title={title}
          img={img}
          name={name}
          content={content}
          submitPost={this.submitPost}
          handleEdit={this.handleEdit}
        />)
      }
        <Posts posts={posts} filter={filter} filteredPosts={filteredPosts} deletePost={this.deletePost} toggle={this.toggle} />
        </div>
        <ToTop />
      </div>
    );
  }
}

export default App;
