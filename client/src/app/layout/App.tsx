import { useEffect, useState } from 'react'
import '../styles.css'
import { CssBaseline } from '@mui/material';
import axios from 'axios';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/ActivityDashboard';

export default function App(){
  const [activities , setActivities] = useState<Activity[]>([]);
  const [selectedActivity , setSelectedActivity] = useState<Activity | undefined>(undefined);

  useEffect(() => {
    axios.get<Activity[]>("https://localhost:7272/api/activities")
    .then(Response => setActivities(Response.data))
  } , []);

  function handleSelectActivity(id: string){
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancleSelectActivity(){
    setSelectedActivity(undefined);
  }

  function handleSubmitForm(activity : Activity){
    if(activity.id){
      setActivities(activities.map(x => x.id === activity.id ? activity : x));
    }else{
      setActivities([...activities , {...activity , id : activities.length.toString()}]);
    }
  }

  function handleDelete(id : string){
    setActivities(activities.filter(x => x.id !== id))
  }

  return (
    <>
      <CssBaseline />
      <NavBar />
      <ActivityDashboard
        activities = {activities}
        selectActivity={handleSelectActivity}
        cancelSelectActivity={handleCancleSelectActivity}
        selectedActivity={selectedActivity}
        submitForm={handleSubmitForm}
        deleteActivity = {handleDelete}/>
    </>
  )
}