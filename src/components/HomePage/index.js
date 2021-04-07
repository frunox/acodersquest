import React from 'react'
import WelcomePost from '../WelcomePost'
import PostList from '../PostList'
import './homePage.css'

export default function HomePage() {
  return (
    <div className='home-content'>
      <h1 className='home-headline'>Your coding journey begins...</h1>
      <WelcomePost />
      <h3 className='home-message'>Recent Posts...</h3>
      <PostList />
    </div>
  )
}
