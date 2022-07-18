import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Link as RouterLink } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function UserCard(props: any) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardActionArea component={RouterLink} to={`/user/${props.id}`}>
        <CardContent>
          <img src={ props.picture } />
          <br />
          <Typography variant="body2">
            name: { props.name } 
            <br />
            age: { props.age } 
            <br />
            eyeColor: { props.eyeColor } 
            <br />
            company: { props.company } 
            <br />
            email: { props.email } 
            <br />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
