const express = require('express'),
      cors = require('cors'),
      app = express(),
      port = 4321,
      postsCtrl = require('./controllers/controller')
      postsUrl = '/api/posts'


app.use(express.json())
app.use(cors())

//Endpoints
app.get(postsUrl, postsCtrl.getPosts)
app.post(postsUrl, postsCtrl.postPosts)
app.put(`${postsUrl}/:id`, postsCtrl.putPosts)
app.delete(`${postsUrl}/:id`, postsCtrl.deletePosts)


app.listen(port, () => console.log(`Server listening on port ${port}`))