import React, {Component} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const fields = ["History", "Offering" ]
const other_fields = ["Address", "Contact" ,"Website"]
const extra_fields =  ["Notes" ,"Email address", "Photo captions", "Visiting hours", "Website"];

export default class Post extends Component{
    isValidUrl = (string) => {
      let url;
      
      try {
        url = new URL(string);
      } catch (_) {
        return false;  
      }

      return true;
    }
    render(){
        const {post} = this.props;
        return(
            <div style={{marginBottom: 10, padding: 8}}>
                <Card> 
                    <CardContent>
                        <Typography variant="h5" component="h2" gutterBottom>
                            {post.Name.toUpperCase()}
                        </Typography>
                        {fields.map(field=>{
                            if(post[field])
                            return(
                                <div>
                                    <Typography color="textSecondary" gutterBottom>
                                        {field}
                                    </Typography>
                                    <Typography key={post.id} variant="body2" component="p" gutterBottom>
                                        {post[field]}
                                    </Typography>
                                </div>
                            )
                        })}
                        <GridList cellHeight={160} cols={3}>
                            {post.Photos.map((image) => (
                            <GridListTile>
                                <img src={image.thumbnails.large.url} styel={{width: image.thumbnails.large.width, height: image.thumbnails.large.height}}></img>
                            </GridListTile>
                            ))}
                        </GridList>
                        <br></br>
                        {other_fields.map(field=>{
                            if(post[field])
                            return(
                                <div>
                                    <Typography color="textSecondary" gutterBottom>
                                        {field}
                                    </Typography>
                                    {
                                        (field=="Website") || (field=="Contact" && this.isValidUrl(post[field]))?
                                        <a href={post[field]}>
                                            <Typography key={post.id} variant="body2" component="p" gutterBottom>
                                                {post[field]}
                                            </Typography>
                                        </a> :
                                        <Typography key={post.id} variant="body2" component="p" gutterBottom>
                                            {post[field]}
                                        </Typography>
                                    }
                                </div>
                            )
                        })}
                    </CardContent>
                </Card>
            </div>
        )
    }
}