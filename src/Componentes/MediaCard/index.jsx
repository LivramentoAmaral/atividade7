import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Rating from '@mui/material/Rating';

export default function MediaCard({ item: { title, description, image } }) {

    return (
        <Card sx={{ maxWidth: 345,
            borderRadius: 2,
            margin: 2,
            backgroundColor: "#f6f6f6",
            color: "#fff",
          
            justifyContent: 'center',
            '&:hover': {
                boxShadow: '0 0 5px #d2d2d3',
                transform: 'scale(1.02)',
                transition: 'all 0.2s ease-in-out',
                cursor: 'pointer',
            },

         }}>
            <CardMedia
                sx={{ height: 140,
               }}
                image={image}
                title="green iguana"

            />
            <CardContent sx={
                {
                    height: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: "#6f7275",
                    color: "#fff"
                }
            } >
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography >
                <Typography variant="body2" color="white">
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: "#6f7275",
                color: "#fff"
        
            }} >
            <p>Avaliação: </p>
                <Rating
                    name="simple-controlled"
                    value={3}
                    
                />
            </CardActions>
        </Card>
    );
}