import { useEffect, useState } from 'react'
import './App.css'
import { List, ListItem , ListItemText, Typography } from '@mui/material';
import axios from 'axios';

export default function App(){
  const [activities , setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>("https://localhost:7272/api/activities")
    .then(Response => setActivities(Response.data))
  } , []);

  return (
    <>
      <Typography>Reactivities</Typography>
      <List>
        {activities.map((activity) => {
          return <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        })}
      </List>
    </>
  )
}