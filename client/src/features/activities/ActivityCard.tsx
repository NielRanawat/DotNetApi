import { Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material"

type Props = {
    activity: Activity
    selectActivity : (id : string) => void
    deleteActivity : (id : string) => void
}

export default function ActivityCard({deleteActivity , activity , selectActivity}: Props) {
  return (
    <Card>
        <CardContent>
            <Typography>{activity.title}</Typography>
            <Typography>{activity.date}</Typography>
            <Typography>{activity.description}</Typography>
            <Typography>{activity.city} / {activity.venue}</Typography>
        </CardContent>
        <CardActions>
            <Chip label={activity.category} variant="outlined" />
            <Button onClick={() => deleteActivity(activity.id)}>Delete</Button>
            <Button onClick={() => selectActivity(activity.id)}>View</Button>
        </CardActions>
    </Card>
  )
}
