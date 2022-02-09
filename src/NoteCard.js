
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import "./NoteCard.css";

function NoteCard({name,id,email}) {
  return (
    <div className='Container'>
        <Card variant="outlined" className="CardComponent" borderRadius="20px">
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {email}
        </Typography>
      </CardContent>
        </Card>
    </div>
  )
}

export default NoteCard