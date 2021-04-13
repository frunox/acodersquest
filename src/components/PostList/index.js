import React from 'react'
import { Link } from 'react-router-dom'
// import Markdown from 'markdown-to-jsx'
import ReactMarkdown from 'react-markdown'
// import { usePosts } from "../../contexts/PostContext"
import { usePosts } from "../../contexts/PostContext"
import '../components.css'

function PostList() {
  const postArray = usePosts()

  console.log('PostList: postArray', postArray)
  let array = [...postArray]
  console.log("PostList array", array)
  if (array.length > 3) {
    array.splice(3)
  }
  console.log('PostList: array spliced: ', array)

  return (
    <div className='postlist'>
      {
        array.length &&
        array.map((post, i) => {
          return (
            <div className="post-card" key={post.postId}>
              <Link className='post-link' to={`/post/${post.postId}`}>
                <h2 className='post-title'>{post.title}</h2>
                <small>Published on {post.date}</small>
                <hr></hr>
                <ReactMarkdown className='post-card-summary'>{post.summary}</ReactMarkdown>
              </Link>
              <small className="click">Click to read more...</small>
            </div>
          )
        })
      }
    </div >
  )
}

export default PostList
