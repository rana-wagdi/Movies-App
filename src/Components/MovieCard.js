import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Rating from '@mui/material/Rating';


import '../styles/movieCard.css'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function MovieCard({movie}) {
// console.log(movie)
  return (
    <div className='movieCard'>
      <CardContent className='movieCard__items'>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="" alt={movie.title} /> 
        </Typography>
         <Typography>
       {movie.title}
        </Typography>
        <Box>
        {/* {new Array([movie.vote_average]).fill(null).map(() => (
          <i class="fas fa-star"/>
        ))} */}
        
        <Rating name="customized-5" defaultValue={movie.vote_average/2} max={5} />   
    </Box>
       {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </CardContent>
    </div>
  );
}
