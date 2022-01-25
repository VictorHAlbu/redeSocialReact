import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root:{
    marginBottom: 16
  }
})


function PostCard({ post }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader>

      </CardHeader>
      <CardContent>

      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  )
}

export default PostCard;