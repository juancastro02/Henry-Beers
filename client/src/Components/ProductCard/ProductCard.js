import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import Product from '../Product/Product'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({name, image, stock, description, categories, price, id}) {
  const [buttonClicked, setButtonClicked] = useState(false);

 const handleButtonClick = () => {
      setButtonClicked(true)
  }

  const classes = useStyles();

  return (
    <Card className={classes.root}  style={{marginLeft: "40px", marginRight: "40px", marginTop: "40px"}} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Cerveza Artesanal"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add Beer
        </Button>
     <Link to={`/products/${id}`} > <Button size="small" color="primary"  onClick={() => handleButtonClick()} >
          More information 
        </Button> </Link>
        {buttonClicked ? <Product datas={name, description, price, stock}/> : null} 
      </CardActions>
    </Card>
  );
}
