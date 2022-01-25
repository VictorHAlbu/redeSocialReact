import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PostCard from '../../../componentes/PostCard'

const useStyles = makeStyles((theme) => ({
  root:{
  }
}))

const posts = [
  {
    id: 1,
    author:{
      id: 1,
      name: 'Lucas Nhini',
      username: 'lucasninhi',
      avatar: 'images/avatars/avatar_1.jpeg'
    },
    title: 'Criando um app do zero com React',
    date: 'Janeiro 2022',
    description: 'Bláblá',
    hashtags: '#dotenet, #javascript, #react',
    image: '/images/posts/post9.jpeg'
  },
  {
    id: 2,
    author:{
      id: 2,
      name: 'Victor Hugo  ',
      username: 'vh12albuquerque',
      avatar: 'images/avatars/avatar_1.jpeg'
    },
    title: 'Criando um app do zero com Ruby on Rails',
    date: 'Janeiro 2022',
    description: 'Usando o framework rails',
    hashtags: '#rubyonrails, #javascript, #react',
    image: '/images/posts/post8.jpeg'
  }
] 


function Feed() {
  const classes = useStyles();

  return(
    <div>
      {
        posts.map(post =>(
          <PostCard key={post.id} post={post} />
        ))
      }
    </div>
  )
}

export default Feed;