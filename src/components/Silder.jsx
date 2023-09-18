import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import S1 from './images/Slider1.png'
import S2 from './images/Silder2.png'
import "./slider.scss"
const Silder=(props)=>{
    var items = [
        {
            img:S2,
            heading: "Summer Sale",
            description: "Probably the most random thing you have ever seen!     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, totam quos quam, quisquam mollitia quasi vel, numquam minima enim aliquam obcaecati id alias incidunt beatae reprehenderit? Doloremque harum eaque deserunt."
        
        },
        {
            img:S2,
            heading: "Kids Zone",
            description: "Hello World!     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, totam quos quam, quisquam mollitia quasi vel, numquam minima enim aliquam obcaecati id alias incidunt beatae reprehenderit? Doloremque harum eaque deserunt."
        }
        ,
        {
            img:S2,
            heading: "Big Deal",
            description: "Hello World!     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, totam quos quam, quisquam mollitia quasi vel, numquam minima enim aliquam obcaecati id alias incidunt beatae reprehenderit? Doloremque harum eaque deserunt."
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <div className='containor'>
            <img src={props.item.img} alt="" />
            <div className='desSec'>
                <h1  className='heading'>{props.item.heading}</h1>
            <p>{props.item.description}</p>
            <Button className="Check">
                Check it out!
            </Button>
            </div>

            </div>
        </Paper>
    )
}

export default Silder