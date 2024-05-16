import React, { useRef, useState } from 'react';

import './App.css'

import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

export default function App() {


  const [post, setPost] = useState({title: '', body: ''})

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ])



  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }


  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={event => setPost({...post, title: event.target.value})}
          type="text"
          placeholder='Название поста' />
        <MyInput
          value={post.body}
          onChange={event => setPost({...post, body: event.target.value})}
          type="text"
          placeholder='Описание поста' />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      {/* Управляемый компонент */}
      <PostList posts={posts} title={'Посты про JS'} />

    </div>
  );
}

