import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import {Link} from "react-router-dom"
import "./slider.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
const MoreProductss = ({ item })=>{
  console.log(item)
  return (
    <div data-aos="fade-up">
    <Card sx={{width: 300,margin:1}}>
      <CardMedia
        sx={{height: 300, backgroundSize: 'contain', backgroundPosition: 'center'}}
        image={item && item.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item && item.title.slice(0,14)+"..."}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item && item.desc.slice(0,75)+"..."}
        </Typography>
      </CardContent>
      <h4 className='m-2'>
        ${item.price}
      </h4>
      <div className='m-2'>
      <Rating name="half-rating-read" defaultValue={3.6} precision={0.5} readOnly />
      </div>
      <CardActions>
    <Link to={`/moreProduct/${item._id}`}>
        <Button size="small my-btn1">View Product</Button>
        </Link>
        <Button size="small my-btn2">Add to Cart</Button>
      </CardActions>
    </Card>
    </div>
  );
}







export default MoreProductss;