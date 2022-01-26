import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { CardActionArea } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";



const useStyles = makeStyles({
  root:{
    marginBottom: 16
  },
  subheader:{
    display: 'flex',
    alignItems: 'center'
  },
  caption:{
    marginRight: 8
  },
  message:{
    height: 'auto',
    marginBottom: 16,
    padding: '0 24px'
  }, 
  image:{
    height: 300,
    width: '100%',
    maxWidth: '100%'
  }, 
  content:{
    padding: 0
  },
  favorite:{
    marginLeft: 'auto'
  }
})


function PostCard({ post }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={post.author.avatar} />}
        title={<Typography variant='h6'>{post.title}</Typography>}
        subheader={
          <div className={classes.subheader}>
            <Typography variant="caption" className={classes.caption}>
                {'Avaliado por'}
            </Typography>
            
            <Typography variant="subtitle2" className={classes.caption}>
                {post.author.name}
            </Typography> 

            <Typography variant="subtitle2" className={classes.caption}>
                {post.date}
            </Typography>  
         </div> 
      }

      />
      <CardContent className={classes.content}>
      <Typography 
        variant="body1" 
        className={classes.message}
        >
                {post.hashtags}
      </Typography>
      <CardActionArea>

      </CardActionArea>
        <img src={post.image} className={classes.image} alt="img"/>
      </CardContent>
      <CardActions disableSpacing>
          <IconButton aria-label="like">
            <FavoriteIcon/>
            <Typography
              style={{cursor: 'pointer'}}
              color="textSecondary"
              variant="body2"
            >
              {'10'}
            </Typography>

          </IconButton> 

          <IconButton aria-label="comment">
            <BsFillChatLeftDotsFill/>
            <Typography
              className={classes.reactions}
              color="textSecondary"
              variant="body2"
            >
              {'30'}
            </Typography>

          </IconButton> 
          <IconButton aria-label="favorite" className={classes.favorite}>
            <BsFillBookmarkFill/>
          </IconButton>
      </CardActions>
    </Card>
  )
}

export default PostCard;