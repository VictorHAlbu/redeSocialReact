import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PostCard from '../../../componentes/PostCard'

const useStyles = makeStyles((theme) => ({
  root:{

  }
}))

const posts = [
  {id: 1, description: 'teste 1'},
  {id: 2, description: 'teste 2'}

] 


function Feed() {
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