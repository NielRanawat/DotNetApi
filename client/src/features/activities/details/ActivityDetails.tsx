
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";

type Props = {
    activity: Activity;
    cancelSelectActivity : () => void
}
export default function ActivityDetails({activity , cancelSelectActivity} : Props) {
  return (
    <Card>
        <CardMedia component="img" src={`/images/categoryImages/${activity.category}`} />
        <CardContent>
            <Typography>{activity.title}</Typography>
            <Typography>{activity.date}</Typography>
            <Typography>{activity.description}</Typography>
        </CardContent>
        <Button onClick={cancelSelectActivity}>Cancel</Button>
    </Card>
  );
}
